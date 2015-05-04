var args = arguments[0] || {};

//var Alloy = require("alloy");
//var index = Alloy.createController("index").getView();

//var projectsViewDisplay = Alloy.createController("projects").getView();
//var industryViewDisplay = Alloy.createController("industry").getView();
//var contactsViewDisplay = Alloy.createController("contacts").getView();
//var settingsViewDisplay = Alloy.createController("config").getView();

/*create multiple event listeners that target each row and then pulls up the corresponding view
 * row1 all the way through row6
 */

//$.row1.addEventListener('click', openHome);
/*
$.row2.addEventListener('click', openProjects);
$.row3.addEventListener('click', openCalendar);
$.row4.addEventListener('click', openIndustry);
$.row5.addEventListener('click', openContacts);
$.row6.addEventListener('click', openSettings);


*/



//variable to controller that open/close slide
var activeView = 1;

// add event listener in this context
$.menuTable.addEventListener('click',function(e){
    

    
    //Could possibly be turned into a switch statement.
    //this is the event listener for the home screen.
    if(e.rowData.id==="row1"){
        if(activeView!=1){
        	//$.menuSlidingView.drawermainview.add(mainViewDisplay.getView());
            //These event listeners are removed to expose the home screen/feed screen.
            //$.drawermenu.drawermainview.remove(projects.getView());//removes the projects page.
            //$.drawermenu.drawermainview.remove(calendar.getView());
            //$.drawermenu.drawermainview.remove(industry.getView());
            //$.drawermenu.drawermainview.remove(contacts.getView());
            //$.drawermenu.drawermainview.remove(configView.getView());//removes the settings page.           
            activeView = 1;
        } else {
		//find out a way that just pushes everything back to the left of the screen using the widget.
		//or by just coding the animation itself.
		
		//$.menuSlidingView.menuOpen = true;
		
		var displayMainView = Alloy.createController('mainview');
		displayMainView.slidingMainView.init({
		    
		    menuview:$.menuView,
		    mainview:displayMainView.mainView,
		    duration:200,
		    parent: displayMainView.mainviewXML
		});
		//displayMainView.slidingMainView.menuOpen = true;
		displayMainView.slidingMainView.menuOpen=!displayMainView.slidingMainView.menuOpen;
		displayMainView.slidingMainView.showhidemenu();	
		
		
		
		
		
					
	
	/*	
	var displayMainView = Alloy.createController('mainview');
	
	$.menuSlidingView.init({
	    
	    menuview:$.menuView,
	    mainview:displayMainView.mainView,
	    duration:200,
	    parent: $.menuviewXML
	});

	*/
		
		
            activeView = 1;
        }
    } 
    /*
    //this is the event listener for the projects.
    if(e.rowData.id==="row2"){
        if(activeView!=2){
        	//removes all of the other views from the screen
        	$.drawermenu.drawermainview.remove(calendar.getView());
        	$.drawermenu.drawermainview.remove(industry.getView());
        	$.drawermenu.drawermainview.remove(contacts.getView());
        	$.drawermenu.drawermainview.remove(configView.getView());
            //displays the projects view.
            $.drawermenu.drawermainview.add(projects.getView());
            activeView = 2;
        } else{
            activeView = 2;
        }
    }
    //this is the event listener for the calendar
    if(e.rowData.id==="row3"){
    	if(activeView!=3){
    		//removes all of the other views from the screen
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(industry.getView());
    		$.drawermenu.drawermainview.remove(contacts.getView());
    		$.drawermenu.drawermainview.remove(configView.getView());
    		//displays the calendar view.
    		$.drawermenu.drawermainview.add(calendar.getView());
    		activeView = 3;
    	} else {
    		activeView = 3;
    	}
    }
    //this is the event listener for the industry
    if (e.rowData.id==="row4"){
    	if (activeView!=4){
    		//removes all of the other views from the screen.
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(calendar.getView());
    		$.drawermenu.drawermainview.remove(contacts.getView());
    		$.drawermenu.drawermainview.remove(configView.getView());
    		//displays the industry view
    		$.drawermenu.drawermainview.add(industry.getView());
    		activeView = 4;
    	} else {
    		activeView = 4;
    	}
    }
    //this is the event listener for the contacts
    
    if (e.rowData.id==="row5"){
    	if (activeView!=5){
    		//removes all of the other views from the screen.
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(calendar.getView());
    		$.drawermenu.drawermainview.remove(industry.getView());
    		$.drawermenu.drawermainview.remove(configView.getView());
    		//displays the contacts view.
    		$.drawermenu.drawermainview.add(contacts.getView());
    		activeView = 5;
    	} else {
    		activeView = 5;
    	}
    }
    //this is the event listener for the settings.
    if (e.rowData.id==="row6"){
    	if (activeView!=6){
    		//removes all of the other views from the screen.
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(calendar.getView());
    		$.drawermenu.drawermainview.remove(industry.getView());
    		$.drawermenu.drawermainview.remove(contacts.getView());
    		//displays the settings view or configView.
    		$.drawermenu.drawermainview.add(configView.getView());
    		activeView = 6;
    	} else {
    		activeView = 6;
    	}
    }*/
    // on Android the event is received by the label, so watch out!
    Ti.API.info(e.rowData.id); 
});


	//$.slidingMenuView.hide();
	//mainViewDisplay.show();
/*
function openProjects(){
	$.slidingMenuView.hide();
	projectsViewDisplay.open();
}*/

//$.slidingMenuView.open();
