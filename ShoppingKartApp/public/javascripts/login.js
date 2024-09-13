var updateCaptchaText = () => {
    generatedCaptchaText = captchaUtilObj.generateCaptcha('#captchaImage');
}

var readUserDetails = () => {
    var userDetails = {};
    userDetails.accountId = $("#accountId").val();
    userDetails.accountPassword = $("#accountPassword").val();
    // console.log(userDetails);
    rememberCredentials(userDetails);

    var userEnteredCaptchaText = $("#captcha").val();
    if (userEnteredCaptchaText == generatedCaptchaText) {
        document.querySelector("#signincapErr").style.display = 'none';
        validateUserCredentials(userDetails);
    } else {
        document.querySelector("#signincapErr").style.display = 'block'
    }
    // validateUserCredentials(userDetails);
}
var validateUserCredentials = (userDetails) => { 
    
    axios.post('/validate/userCredentials', userDetails).then((response) => {
        if (response.data.msg == 'Invalid') {
            $("#errMsgBlock").text("Invalid Credentials....");
        } else {
            loadSelectedPage('productDetails');
        }
        }).catch((err) => {
            console.log("error");
        });;

}
var rememberCredentials = (userDetails) => {
    var isCheckBoxChecked = document.querySelector("#check").checked;
    if (isCheckBoxChecked) {
        localStorage.setItem("userData",JSON.stringify(userDetails));
    } else {
        localStorage.removeItem("userData");
    }
}
var priFillData = () =>  {
    document.querySelector("#check").checked = true;
    var credentials = localStorage.getItem("userData");
    
    credentials = JSON.parse(credentials);
    $("#accountId").val(credentials.accountId);
    $("#accountPassword").val(credentials.accountPassword);
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("userData")!= null){
        priFillData();       
    }
    
});

var loginpwdreq = (event) => {
    var accountPassword = $("#accountPassword").val();
    console.log(accountPassword);
    if(accountPassword.length != 8) {
        document.querySelector("#signinpwdErr").style.display = 'block'
    }
}

