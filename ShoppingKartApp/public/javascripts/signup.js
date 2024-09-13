var updateSignupCaptchaText = () => {
    generatedCaptchaText = captchaUtilObj.generateCaptcha('#signupCaptchaImage');
}

var passwordMatching = () => {
    var userEnteredCaptchaText = $("#userSignupcaptchaText").val();
    // console.log(userEnteredCaptchaText)
    if (userEnteredCaptchaText == generatedCaptchaText) {
        document.querySelector("#signupcapErr").style.display = 'none';
        window.open("/login.html", "_self")
        return;
    }
    else {
        document.querySelector("#signupcapErr").style.display = 'block'
    }
}