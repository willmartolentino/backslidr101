var slidrBtns = document.getElementsByClassName('backslidr-btn'); // Selects all HTML elements with a .backslidr-btn class

/*==========  This function will execute when the user click/s on any thumbnail images: Start  ==========*/
var slidrFadeIn = function ( event ) {
    var targetElement = this.hash;  // Refers to the element when the function executes (element that is anchored on the .backslidr-btn class) 
                                    // or was simply being clicked by the user,  and it gets its property value (href) by setting a property called .hash
    // console.log(targetElement); // example value: #backslidr-item-1 
    
    var targetValue = targetElement.slice(1); // expected result: backslidr-item-1
    console.log(targetValue);

    var elFadeIn = function () {
		var targetActive = document.getElementById(targetValue);
        targetActive.style.display = "block";
        targetActive.className = "backslidr-item item active";
        //document.getElementById(targetValue).style.opacity = " 0.5 ";
    };
    
    setTimeout( elFadeIn, 2000 );
    
    event.preventDefault(); // Prevents the default event of the element
};

for ( var i = 0; i < slidrBtns.length; i++ ) { // Loop
    slidrBtns[i].addEventListener( 'click', slidrFadeIn, false ); // Add the event listener to all selected HTML elements with a .backslidr-btn class
}

/*==========  This function will execute when the user click/s on any thumbnail images: End  ==========*/
