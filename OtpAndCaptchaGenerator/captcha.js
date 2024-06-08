var generateCaptcha = () => {
    var captcha = "";
    var arr = ["L","N","S","U"];
    for(var i = 0; i < 5 ; i++){
        var seq = Math.floor(Math.random()*arr.length);
        if(arr[seq]=="L"){
            captcha+= lowerCase()
        }
        else if (arr[seq]=="N"){
            captcha+= number()
        }
        else if(arr[seq]=="S"){
            captcha+= symbol()
        }
        else if(arr[seq]=="U"){
            captcha+= upperCase()
        } 
    }
            
   
    document.querySelector("#captcha").innerHTML=captcha;
}

var upperCase =()=>{
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    return randomChar;
}
var lowerCase =()=>{
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 25) + 97);
    return randomChar;
}
var number =()=>{
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 9) + 48);
    return randomChar;
}
var symbol =()=>{
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 6) + 33);
    return randomChar;
}