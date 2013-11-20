var item = document.getElementsByClassName("backslidr-item item");

console.log(item);

var slidrFadeIn = function () {
    // setTimeout(function(){alert("Hey")}, 5000);
    setTimeout(slidrOpacity(), 10000);
}

var slidrFadeOut = function () {
    item[0].style.opacity = "0.1";
}

var slidrOpacity = function () {
    item[0].style.opacity = "1";
    item[0].style.border = "1px solid red";
}

// var slidrFadeIn.onclick = function () {

// }

// var slidrFadeOut.onclick = function () {
    
// }