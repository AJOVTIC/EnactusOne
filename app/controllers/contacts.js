//Jack
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
    parent: $.contacts
});


//Jack did this borrowing Bryan's code

var Cloud = require('ti.cloud');
Cloud.debug = true;


/*function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 
*/

//$.list.setMarker({sectionIndex:0,itemIndex:100});

var plainTemplate = {
    childTemplates: [ {
        type: "Ti.UI.Label",
        bindId: "username",
        properties: {
            backgroundColor: "#00B100",
            width: "260dp",
            top: "11dp",
            bottom: "10dp",
            left: "100dp",
            borderRadius: "5dp",
            separatorColor: "#253640"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "email",
        properties: {
            color: "#565656",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "20dp"
        },
        separatorColor: "#253640"
    }, {
        type: "Ti.UI.Label",
        bindId: "firstname",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "70dp"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "lastname",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "60dp"
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

var userList = ['5547f8c1ac45470287627bcd'];


for ( var i = 0; i < userList.length; i++) {
Cloud.Users.show({
    user_id: userList[i]
}, function (e) {
    if (e.success) {
        var user = e.users[0];
  
    data.push({
            	username : { text: user.username},
            	email: { text: user.email},
            	firstname : {text: user.first_name},
            	lastname : {text: user.last_name},
    	
 
        
    });
}
     section.setItems(data);
           });
           userList[i] = Ti.UI.createView();        
           userList[i].add(listView);
           		}

var scrollableView = Ti.UI.createScrollableView({
  views:userList,
  showPagingControl:true
});          
  
 sectionView = Ti.UI.createView();
 sectionView.add(scrollableView);
 $.mainView.add(sectionView);
 
$.contacts.open();