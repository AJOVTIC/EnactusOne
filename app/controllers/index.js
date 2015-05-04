
//var mainview = Alloy.createController("mainview").getView();
//var menuview = Alloy.createController("menuview").getView();

$.doLoginBtn.addEventListener('click', doLoginBtnClicked);

function doLoginBtnClicked() {

	// create instance of the user model
	var user = Alloy.createModel('User');

	// call the extended model’s function
	user.login($.email.value, $.password.value, userActionResponseHandler);
};//end doLoginBtnClicked ch7

function userActionResponseHandler(_resp) {
	if (_resp.success === true) {
		
		var mainview = Alloy.createController("mainview").getView();
		mainviewXML.open();
        var menuview = Alloy.createController("menuview").getView();		
		menuviewXML.open();

		// Do stuff after successful login.
		Alloy.Globals.loggedIn = true;
		Alloy.Globals.CURRENT_USER = _resp.model;
		
		// save the values as a string.


		$.parentController.loginSuccessAction(_resp);

	} else {
		// Show the error message and let the user try again.
		alert("loginFailed", _resp.error.message);

		Alloy.Globals.CURRENT_USER = null;
		Alloy.Globals.loggedIn = false;
	}
  };

function doClick(e) {
    alert($.label.text);
    //$.login.open();
}

$.index.open();
$.loginView.show();
//mainview.open();
//menuview.open();









//Variables go here in the original code.

/*
//add menu view to ConfigView exposed by widget
configView.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
configView.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget

$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});


//projects view and the menu button!!!
projects.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
projects.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget

$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});
//end of project view---

//beginning of the calendar view and menu button!!!
calendar.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
calendar.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget

$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});//end of the calendar view---

//beginning of the industry view and the menu button!!!
industry.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
industry.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget

$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});//end of the industry view---

//beginning of the contacts view and the menu button!!!
contacts.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
contacts.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget

$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});//end of the contacts view and button---

*/

//$.index.open();
