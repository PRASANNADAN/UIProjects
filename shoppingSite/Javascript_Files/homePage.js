var obj = {
    login () {
        window.open("HTML_Files/loginPage.html")
    },

    signUp () {
        window.open("HTML_Files/signUppage.html")
    }
}

var loadProductDetails = (data, index) => {
    var mainLiTag = $("<li/>");
    var ulTag = $('<ul class="singleProduct"/>');

    var li1 = $("<li/>");
    var imgTag = $("<img />").attr("src", data.imgUrl);
    li1.append(imgTag);
    ulTag.append(li1);

    var li2 = $("<li/>").text("Product Name: " + data.name);
    ulTag.append(li2);

    var li3 = $("<li/>").text("Price :");
    var span1 = $("<span class='actualPrice'/>").text(data.price);
    var discountedPrice = data.price - (data.price * data.discountPercent) / 100;
    var span2 = $("<span class='discountedPrice'/>").text(discountedPrice);
    li3.append(span1)
    li3.append(span2);
    ulTag.append(li3);

    var li4 = $("<li />").text("Manufacturer : " + data.manu);
    ulTag.append(li4);
    var id = "rating_block_" + index;

    var li5 = $("<li id='" + id + "' />").text("Rating:");
    ulTag.append(li5);

    mainLiTag.append(ulTag);
    // console.log(mainLiTag);
    $(".productDetailsContainer").append(mainLiTag);

    loadStarRatings('#' + id, data.rating);

}

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0 ; i < productData.length; i++) {
        loadProductDetails(productData[i], i);
    }
})
