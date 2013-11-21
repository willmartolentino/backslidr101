var slidrBtns = document.getElementsByClassName('backslidr-btn'); // Selects all HTML elements with .backslidr-btn class

/*==========  This function will execute when the user click/s on any image thumbnail: Start  ==========*/
var slidrFade = function (event) {
    var targetElement = this.hash; // Targets the element anchored on the .backslidr-btn class
    console.log(targetElement);

    var targetVal = targetElement.href = targetElement; // example value: #backslidr-item-4
    
    console.log(targetVal);
    // var delHash = str.slice(1); // expected result: backslidr-item-4

    // targetElement.delHash;

    //document.getElementById(targetElement).

    // var el = document.getElementById("backslidr-items").childNodes;
    // for (var j = 0; j < el.length; j++) {
    // console.log(el[j].nodeName + " <br />");
    // };
    

    event.preventDefault();
};

for (var i = 0; i < slidrBtns.length; i++) { // Loop
    slidrBtns[i].addEventListener('click', slidrFade, false); // Add the event listener to all selected HTML elements with .backslidr-btn class
}

/*==========  This function will execute when the user click/s on any image thumbnail: End  ==========*/

// var slidrFadeIn.onclick = function () {}
// var slidrFadeOut.onclick = function () {}
