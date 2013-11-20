var item = document.getElementsByClassName("backslidr-item item");

// console.log(item);

var slidrBtn1 = function () {
	item[4].style.display = "block";
	item[0].style.display = "block";
}

var slidrBtn2 = function () {
	item[0].style.display = "none";
	item[1].style.display = "block";
}

var slidrBtn3 = function () {
	item[1].style.display = "none";
	item[2].style.display = "block";
}

var slidrBtn4 = function () {
	item[2].style.display = "none";
	item[3].style.display = "block";
}

var slidrBtn5 = function () {
	item[3].style.display = "none";
	item[4].style.display = "block";
}



// var slidrFadeIn.onclick = function () {

// }

// var slidrFadeOut.onclick = function () {
    
// }
