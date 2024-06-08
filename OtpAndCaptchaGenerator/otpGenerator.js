var generateOtp = () =>{
   
    var otp = "";
    for( var i = 0 ; i < 5; i++){
        var randomNum = Math.floor(Math.random()*9);
       otp += randomNum ;
    }
    document.querySelector("#otp").innerHTML = otp;
}