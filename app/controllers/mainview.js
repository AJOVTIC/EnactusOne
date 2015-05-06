var args = arguments[0] || {};


//This line add the image of the picture to the mainscreen.
$.menuButton.add(getMenuButton({
	h: '60dp',
	w: '60dp'
}));

//Minor changes to click event. Update the menuOpen status;
$.menuButton.addEventListener('click',function(){
	
	$.slidingMainView.showhidemenu();
	$.slidingMainView.menuOpen=!$.slidingMainView.menuOpen;
}); // method is exposed by widget

//This gets executed and gets the parameters from lines 5-8.
function getMenuButton(args){
	//This is the background color of the sliding menu button.
	//passes in the size of the button through the "args" parameter.
	var v=Ti.UI.createView({
		height: args.h,
		width: args.w,
		backgroundColor: '#00b100'
	});
	//This is the slider picture that is moving.
	var b=Ti.UI.createView({
		height: "20dp",
		width: "20dp",
		backgroundImage: "/3bar.png"
	});
	
	//add the picture of the slider.png to the view.
	v.add(b);
	
	//returns the button
	return v;
}

var menuView = Alloy.createController('menuview');

$.slidingMainView.init({
    
    menuview:menuView.getView(),
    mainview:$.mainView,
    duration:200,
    parent: $.mainviewXML
});

//Bryan's code
var Cloud = require('ti.cloud');
Cloud.debug = true;



//$.list.setMarker({sectionIndex:0,itemIndex:100});

var plainTemplate = {
    childTemplates: [ {
        type: "Ti.UI.Label",
        bindId: "area",
        properties: {
            backgroundColor: "#00b100",
            right: "10dp",
            top: "10dp",
            bottom: "12dp",
            left: "75dp",
            borderColor : 'black',
            borderRadius: "5dp",
            separatorColor: "#253640"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
        	height: Ti.UI.FILL,
            width: Ti.UI.FILL,
            color: "#565656",
            font: {
                fontFamily: "Arial",
                fontSize: "18dp"
            },
            left: "120dp",
            top: "20dp"
        },
        separatorColor: "#253640"
    }, {
        type: "Ti.UI.Label",
        bindId: "textDetails",
        properties: {
        	height: Ti.UI.FILL,
            width: Ti.UI.FILL,
            color: "black",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "50dp",
            bottom : "12dp"
        }
    }, {
    	type: "Ti.UI.Label",
    	bindId: "date",
    	properties:{
    	height:"50dp",
    	left: "6dp",
    	width: "60dp",
    	top: "5dp",
    	right: "200dp", 
    	color: "black",
    	borderRadius: "3dp",
    	backgroundColor : "white",
    	separatorColor: "#253640"
    	}
    },
    
     ]
};

var listView = Ti.UI.createListView({
	templates : {
		uncheck : plainTemplate
	},
	
	defaultItemTemplate : "uncheck"
});

var section = Ti.UI.createListSection();
 listView.sections = [ section];
 
 var data = [];
 var sectionViews = [];

var eventList = ['5547f901278eff09692b3fb6'];


for ( var i = 0; i < eventList.length; i++) {
Cloud.Events.show({
    event_id: eventList[i]
}, function (e) {
    if (e.success) {
        var event = e.events[0];
		    var moment = require('alloy/moment');
			var day = moment(event.start_time, "YYYY-MM-DD:HH:mm:ssZZ");
			var newDate = day.format("MM-DD");
  
    data.push({
    	        area : {},
            	title : { text: event.name},
            	textDetails: { text: event.details},
            	date: {text: newDate},
    	
 
        
    });
}
     section.setItems(data);
           });
           eventList[i] = Ti.UI.createView();        
           eventList[i].add(listView);
           		}

var scrollableView = Ti.UI.createScrollableView({
  views:eventList,
  showPagingControl:true
});          
  
 sectionView = Ti.UI.createView();
 sectionView.add(scrollableView);
 $.mainView.add(sectionView);
 


$.mainviewXML.open();
