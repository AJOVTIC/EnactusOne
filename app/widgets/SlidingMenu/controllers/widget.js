//<!--Alonso-->

var menuOpen = false;
var duration = 400;
var parent;
//The parent variable is the object/item that is selected.

var init=function(opts){
	//Calls from the widget.xml
	//it affects the mainview and menuview from the respective .xml files.	
	
	$.drawermainview.add(opts.mainview);
	$.drawermenuview.add(opts.menuview);	
	duration=opts.duration;
	parent=opts.parent;
	console.log('initialized');
	setSwipe();
};

//moves the menu button if it is swiped to the sides.
var setSwipe=function(){
	parent.addEventListener('swipe',function(e){ 
		//check if the menu is closed and the direction of the menu is to the right.
	    if(menuOpen == false && e.direction == 'right'){
	        showhidemenu();
	        menuOpen = true;
	    }
	    //check if the menu is open and the direction of the menu is to the left.
	    if(menuOpen == true && e.direction == 'left' ){
	        showhidemenu();
	        menuOpen = false;
	    }
	});
};

//try to fix this in class.
/*
 * everytime that the showhidemenu() is called in the menuview.js
 * it automatically fixes the menuOpen variable to false and goes to the else statement.
 * 
 */
//The function that actually shows and hides the menu.
var showhidemenu=function(){
	//if true, close the sliding menu.
	if (menuOpen){
		moveTo="0";
		menuOpen=false;
	}else{
		//if false, open the sliding menu.
		moveTo="250dp";
		menuOpen=true;
	}

	var newWidth = Ti.Platform.displayCaps.platformWidth;
    	if (OS_ANDROID) 
        	newWidth /= Ti.Platform.displayCaps.logicalDensityFactor;
	$.drawermainview.width=newWidth;
	$.drawermainview.animate({
		left:moveTo,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: duration
	});
};


Ti.Gesture.addEventListener('orientationchange', function(e) {
    var newWidth;
    newWidth = Ti.Platform.displayCaps.platformWidth;
    if (OS_ANDROID)
        newWidth /= Ti.Platform.displayCaps.logicalDensityFactor;
    $.drawermainview.width = newWidth;
});


exports.init=init;
exports.showhidemenu=showhidemenu;
exports.menuOpen=menuOpen;
exports.setDuration=function(dur){
	duration = dur;
};
//<!--Alonso-->