var obj = {
    openTab () {
        obj.Name = document.querySelector("#uName").value;
        if(obj.Name == '' || obj.Name == ' '){
            document.querySelector(".nameErr").style.display = "initial";
            return;
        }
        this.validateCaptcha()
        // window.open("homepage.html")
    },

    validateCaptcha () {
        obj.Captcha = document.querySelector("#captcha").value;
        obj.CaptchaVal = document.querySelector("#captchaBox").innerHTML;
        obj.count = '';
        obj.sCount = '';
        for(i = 0; i<5; i++){
            // console.log(this.CaptchaVal[i]);
            this.count += this.CaptchaVal[i];
            console.log(this.count);
        }
        for(j = 0; j<5; j++){
            this.sCount += this.Captcha[j];
            console.log(this.sCount);
        }
        if(this.count == this.sCount){
            // console.log("right");
            window.open("../homepage.html", "_self")
            window.close("loginPage.html")
            return;
        }
        else{
            document.querySelector(".capErr").style.display = "initial";
        }
        // console.log(this.CaptchaVal);
        // console.log(this.Captcha);
    }
}