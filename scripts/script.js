var slidrBtns = document.getElementsByClassName ( 'backslidr-btn' ); // Selects all HTML elements with a .backslidr-btn class

/*==========  This function will execute when the user click/s on any thumbnail images: Start  ==========*/
var slidrFadeIn = function ( event ) {
    var targetElement = this.hash;  // Refers to the element when the function executes (element that is anchored on the .backslidr-btn class) 
                                    // or was simply being clicked by the user,  and it gets its property value (href) by setting a property called .hash
     // console.log(targetElement);
     
    //for (var i = 0; i < targetElement.length; i++) {
    //  targetElement[i];
    //}

    var targetVal = targetElement; // example value: #backslidr-item-1
    
    var delHash = targetVal.slice( 1 ); // expected result: backslidr-item-1

    console.log(delHash);

    var elFadeIn = function () {
        document.getElementById( delHash ).style.display = " block ";
        //document.getElementById( delHash ).style.opacity = " 0.5 ";
    }
    
    setTimeout( elFadeIn, 3000 );
    
    event.preventDefault(); // Prevents the default event of the element
};

for ( var i = 0; i < slidrBtns.length; i++ ) { // Loop
    slidrBtns[ i ].addEventListener( 'click', slidrFadeIn, false ); // Add the event listener to all selected HTML elements with a .backslidr-btn class
}

/*==========  This function will execute when the user click/s on any thumbnail images: End  ==========*/

// var slidrFadeIn.onclick = function () {}
// var slidrFadeOut.onclick = function () {}
