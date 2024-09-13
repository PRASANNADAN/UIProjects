

var loadSelectedPage = (pageType) => {

    if (pageType == 'homePage') {
        $("#loginBtn").show();
        $("#signupBtn").show();
        $("#logoutBtn").hide();
    } else {
        $("#loginBtn").hide();
        $("#signupBtn").hide();
        $("#logoutBtn").show();
        // console.log(pageType);
    }
    
    var templateUrl = ''; 
    switch (pageType) {
        case 'homePage':
            templateUrl = 'templates/homePage.htm';
            break;
        case 'productDetails':
            templateUrl = 'templates/productDetails.htm';
            break;
    }

    axios.get(templateUrl).then((templtResponse) => {
        // console.log(templtResponse);
        $("main").html(templtResponse.data);
        if (pageType == 'productDetails') {
            getProductDetails(); // which loads the product details...
        }
        // console.log(modelInstance);
        modelInstance.hide();
    });
}   

var modelInstance; 
var logoutModelInstance;
document.addEventListener("DOMContentLoaded", () => {
    modelInstance = new bootstrap.Modal('#loginModel', {});
    logoutModelInstance = new bootstrap.Modal('#logOutModel', {});  
    loadSelectedPage('homePage');
})

