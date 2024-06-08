var data = {};

var validateSpace = (event) =>{

    if (event.charCode == 32){
        return false;
    }
    else{
        return true;
    }
}

var validateChange = (event) =>{
    document.querySelector("#passRequriements").style.display="block";
 }

var validatePassSpace = (event) =>{
    if (event.charCode == 32){
        return false;
    }
    else{
        return true;
    }
}

var count = 0;  
var validatePass = (event) =>{
   var password = event.target.value
            if((password.length)>=8){
                document.querySelector(".pwdLength").style.color="green"; 
            }
            else{
                document.querySelector(".pwdLength").style.color="red"; 
            }

            if (password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) {
                 document.querySelector(".pwdUppercase").style.color = "green";
            } 
            else {
                document.querySelector(".pwdUppercase").style.color = "red";
            }

            // if(event.key === "#" || event.key === "@" || event.key === "&" || event.key === "*" ){
            //     count++;
            //     // console.log(count);
            // }
            // for(j = 0; j<password.length; j++){
            //         var sym = password[j]
            //     console.log(sym);
            // }
            if(password.includes("@", "#", "&", "*", "^")){
                document.querySelector(".pwdChar").style.color="green";
            }
            // if (count >= 1){
            //     document.querySelector(".pwdChar").style.color="green";
            // }
            else{
                document.querySelector(".pwdChar").style.color="red";
            }

            if(password.includes(" ")){
                document.querySelector(".pwdSpace").style.color="red";
            }
            else{
                document.querySelector(".pwdSpace").style.color="green";
            }
            var numCount = 0;
            for( var i = 0 ; i< password.length;i++){
                var charCode = password.charCodeAt(i);
                if(charCode >= 48 && charCode <= 57){
                    numCount++;
                    break;
                }
                }

                if (numCount == 1){
                document.querySelector(".pwdNum").style.color="green";
                }
                else{
                    document.querySelector(".pwdNum").style.color="red";
                }
}

var show = (event) => {
    document.querySelector("#nameErr").style.display="block";

    var name = event.target.value
    if(name == '' || name == ' ') {
        document.querySelector("#nameErr").style.color="red";
    }
    else {
        document.querySelector("#nameErr").style.color="green";
    }
}

var showPass = (event) => {
    if (event.target.checked) {
                document.querySelector("#pswd").type = "text";
    } else {
                document.querySelector("#pswd").type = "password";
    }
}


var obj = {
    register () {
        obj.Name = document.querySelector("#uFName").value;
        if(obj.Name == '' || obj.Name == ' '){
            document.querySelector("#nameErr").style.display = "block";
            return;
        }
        
        obj.mail = document.querySelector("#uMail").value;
        if(obj.mail == '' || obj.mail == ' '){
            document.querySelector("#mailErr").style.display = "block";
            return;
        }

        obj.pswd = document.querySelector("#pswd").value;
        if(obj.pswd == '' || obj.pswd == ' '){
            document.querySelector("#pswdErr").style.display = "block";
            return;
        }
        this.validatePassword()
    },

    validatePassword () {
        obj.pass = document.querySelector("#pswd").value;
        obj.rpass = document.querySelector("#rpswd").value;
        // console.log(this.pass);
        obj.count = '';
        obj.sCount = '';
        for(i = 0; i<this.rpass.length; i++){
            this.count += this.rpass[i];
            // console.log(i);
            // console.log(this.count);
            console.log(this.rpass);
        }
        for(j = 0; j<this.pass.length; j++){
            this.sCount += this.pass[j];
            // console.log(this.sCount);
            console.log(this.pass);
        }
        if(this.count === this.sCount){
            window.open("loginPage.html", "_self")
            return;
        }else{
            document.querySelector("#pwdErr").style.display = "block";
        }
    }
}