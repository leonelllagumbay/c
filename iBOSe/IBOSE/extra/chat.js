
//for chat application
	function displayMessage (message) {
		console.log(message);
		return;
		if(message.data) {
			var msgdata = message.data;
			var type = msgdata.type;
			var userid = msgdata.userid;
			var firstname = msgdata.firstname;
			var lastname = msgdata.lastname;
			var middlename = msgdata.middlename;
			var mymessage = msgdata.mymessage;
			var myprofilepic = msgdata.myprofilepic;
			var companycode = msgdata.companycode;
			
			if(type == 'whosecurrentlyloggedon') {
				var arrCon = new Array;
				var mytext= {
					id: userid,
					name: firstname + ' ' + lastname,
					text: '<img width="20" height="20" style="margin-right: 5px;" title="'+ firstname + ' ' + lastname +'" src="' + myprofilepic + '">' + firstname + ' ' + lastname + ' <i>' +  mymessage + '</i>',
					tooltip: mymessage + ' @' + Ext.util.Format.date(new Date(), 'g:i a'),
					icon: myprofilepic,
					companycode: msgdata.companycode
				};
				arrCon.push(mytext);
				try {
					var myData = {
						userid: GLOBAL_VARS_DIRECT.USERID,
						type: 'iamloggedonnow',
						name: firstname + ' ' + lastname,
						firstname: GLOBAL_VARS_DIRECT.FIRSTNAME,
						lastname: GLOBAL_VARS_DIRECT.LASTNAME,
						middlename: GLOBAL_VARS_DIRECT.MIDDLENAME,
						mymessage: GLOBAL_VARS_DIRECT.MYMESSAGE,
						myprofilepic: GLOBAL_VARS_DIRECT.MYPROFILEPIC,
						companycode: GLOBAL_VARS_DIRECT.COMPANYCODE
					};
					ws.publish("chat",myData);
				} catch(e) {
					console.log('chat error iamloggedonnow' + e);
				}	
			} else if(type == 'iamloggedonnow') {
				var arrCon = new Array;
				var mytext= {
					id: userid,
					name: firstname + ' ' + lastname,
					text: '<img width="20" height="20" style="margin-right: 5px;" title="'+ firstname + ' ' + lastname +'" src="' + myprofilepic + '">' + firstname + ' <i>' +  mymessage + '</i>',
					tooltip: mymessage + ' @' + Ext.util.Format.date(new Date(), 'g:i a'),
					icon: myprofilepic,
					companycode: msgdata.companycode
				};
				arrCon.push(mytext);
				if(companycode == GLOBAL_VARS_DIRECT.COMPANYCODE) {
					try {
					GLOBAL_MYNETWORK_MENU.remove(userid); //it is ok duplicate id for menu will not work
					GLOBAL_MYNETWORK_MENU.add(arrCon);
					} catch(e) {}
				}
			} else if(type == 'iamoutnow') {
				GLOBAL_MYNETWORK_MENU.remove(userid);
			} else if(type == 'iamtypingnow') {
				if(msgdata.recipientuserid == GLOBAL_VARS_DIRECT.USERID && msgdata.companycode == GLOBAL_VARS_DIRECT.COMPANYCODE) {
					if(msgdata.recipientuserid != msgdata.userid) {
						var winexist = Ext.ComponentQuery.query('window[id='+ msgdata.userid + ']');
						if(winexist.length > 0) {
							var myPanel = winexist[0].down('panel');
							myPanel.remove('typing'+msgdata.userid);
							myPanel.add([{
									xtype: 'displayfield',
									id: 'typing'+ msgdata.userid,
				                    value: '<i style="font-size: .9em;">'+ msgdata.firstname + ' is typing...</i>',
									padding: 5,
									width: 200
							}]);
							
							var d = myPanel.body.dom;
							myPanel.body.scroll("b", d.scrollHeight);
						}
					}
				}
			} else if(type == 'iamnottypingnow') {
				if(msgdata.recipientuserid == GLOBAL_VARS_DIRECT.USERID && msgdata.companycode == GLOBAL_VARS_DIRECT.COMPANYCODE) {
					if(msgdata.recipientuserid != msgdata.userid) {
						var winexist = Ext.ComponentQuery.query('window[id='+ msgdata.userid + ']');
						if(winexist.length > 0) {
							var myPanel = winexist[0].down('panel');
							myPanel.remove('typing'+msgdata.userid);
						}
					}
				}
			} else if(type == 'ihaveamessageforyou') {
				if(msgdata.recipientuserid == GLOBAL_VARS_DIRECT.USERID && msgdata.companycode == GLOBAL_VARS_DIRECT.COMPANYCODE) {
					//for me
					var winexist = Ext.ComponentQuery.query('window[id='+ msgdata.userid + ']');
					if(winexist.length > 0) {
						var timenow = new Date();
						timenow = Ext.Date.format(timenow, "g:ia");
						
						if(msgdata.userid == GLOBAL_VARS_DIRECT.USERID) {
							var thevalue = "<li style='list-style: none; text-align: right' title='"+ timenow +"'><span style='font-weight:bold;'>"+ msgdata.mymessage +"</span></li>";
						} else {
							var thevalue = "<li style='list-style: none; text-align: left;' title='"+ timenow +"'><img style='float: left; margin-right: 5px;' width='25px' height='25px' src='"+ msgdata.myprofilepic +"'><span>"+ msgdata.mymessage +"</span></li>";
						}
						
						var myPanel = winexist[0].down('panel');
						myPanel.remove('typing'+msgdata.userid);
						myPanel.add([{
								xtype: 'displayfield',
			                    value: thevalue,
								padding: 5,
								width: 200
						}]);
						
						var d = myPanel.body.dom;
						myPanel.body.scroll("b", d.scrollHeight);
						
						winexist[0].setBodyStyle("border","solid 3px red");
					} else {
						var mychatwin = Ext.widget('chatwin');
						var cnt = Ext.ComponentQuery.query('window[alias=widget.chatwin]');
						mychatwin.setIcon(msgdata.myprofilepic);
						mychatwin.setTitle(msgdata.firstname + ' ' + msgdata.lastname);
						mychatwin.id = msgdata.userid;
						if(cnt.length < 5) {
							var currentW = mychatwin.x;
							mychatwin.setX(currentW*cnt.length);
						} else {
							mychatwin.setX(200);
							mychatwin.setY(200);
						}
						mychatwin.show();
						var timenow = new Date();
						timenow = Ext.Date.format(timenow, "g:ia");
						
						if(msgdata.userid == GLOBAL_VARS_DIRECT.USERID) {
							var thevalue = "<li style='list-style: none; text-align: right' title='"+ timenow +"'><span style='font-weight:bold;'>"+ msgdata.mymessage +"</span></li>";
						} else {
							var thevalue = "<li style='list-style: none; text-align: left;' title='"+ timenow +"'><img style='float: left; margin-right: 5px;' width='25px' height='25px' src='"+ msgdata.myprofilepic +"'><span>"+ msgdata.mymessage +"</span></li>";
						}
						//thevalue = theLeftContent + ' ' + msgdata.mymessage + '<span><i>(' + timenow + ')</i></span>';
						var myPanel = mychatwin.down('panel');
						myPanel.remove('typing'+msgdata.userid);
						myPanel.add([{
								xtype: 'displayfield',
			                    value: thevalue,
								padding: 5,
								width: 200
						}]);
						var d = myPanel.body.dom;
						myPanel.body.scroll("b", d.scrollHeight);
						
						mychatwin.setBodyStyle("border","solid 3px red");
					}
					
					if(typeof refInterval === 'undefined') {
						originalhtmltitle = originalhtmltitleStatic;
						refInterval = setInterval( function() {myTimer('' +msgdata.firstname+' messaged you!')},1000);
					}
				} else {
					//The message was not for me.
					if(msgdata.userid == GLOBAL_VARS_DIRECT.USERID && msgdata.companycode == GLOBAL_VARS_DIRECT.COMPANYCODE) {
						var timenow = Ext.Date.format(new Date(), "g:ia");
						var mymsgcopy = Ext.ComponentQuery.query('window[id='+ msgdata.recipientuserid + ']');
						var thevalue = "<li style='list-style: none; text-align: right' title='"+ timenow +"'><span style='font-weight:bold;'>"+ msgdata.mymessage +"</span></li>";
						var myPanelb = mymsgcopy[0].down('panel');
							myPanelb.remove('typing'+msgdata.recipientuserid);
							myPanelb.add([{
									xtype: 'displayfield',
				                    value: thevalue,
									padding: 5,
									width: 200
							}]);
							var d = myPanelb.body.dom;
							myPanelb.body.scroll("b", d.scrollHeight);
					}
				}
			} else if(type == 'ihaveanimportantmsg') {
				
			} else if(type == 'ihaveseenit') {
				console.log("i have seen it");
				console.log(msgdata.recipientuserid, msgdata.companycode)
				if(msgdata.recipientuserid == GLOBAL_VARS_DIRECT.USERID && msgdata.companycode == GLOBAL_VARS_DIRECT.COMPANYCODE) { //for me
					var winexist = Ext.ComponentQuery.query('window[id='+ msgdata.userid + ']');
					console.log('win exist', winexist);
					if(winexist.length > 0) {
						var myPanel = winexist[0].down('panel');
						myPanel.remove('typing'+msgdata.userid);
						myPanel.add([{
								xtype: 'displayfield',
								id: 'typing'+ msgdata.userid,
			                    value: '<i style="font-size: .9em;">Seen ' + msgdata.receiveddatetime +'</i>',
								padding: 5,
								width: 200
						}]);
						var d = myPanel.body.dom;
						myPanel.body.scroll("b", d.scrollHeight);
						
						if(typeof originalhtmltitle !== 'undefined') {
							//if defined blinking is on turn it off
							clearInterval(refInterval);
							document.title = originalhtmltitleStatic;
							refInterval=undefined;
						}
				    }
				}
			} else if(type == 'mymsgtoforum') {
				try {
					var fg = Ext.ComponentQuery.query('forumlistgrid')[0];
	     			
	     			if(fg) {
	     				var rec = fg.getSelectionModel().getSelection()[0];
		     			if(rec.data.FORUMCODE == msgdata.forumcode) {
							var fv = Ext.ComponentQuery.query('forumview')[0];
							fv.insert(2,[{
				     				xtype: 'container',
				     				padding: 7,
				     				flex: 1,
				     				layout: 'hbox',
				     				items: [{
				     					xtype: 'displayfield',
				     					padding: 2,
				     					height: 50,
				     					width: 50,
				     					value: '<img title="' + msgdata.firstname + ' ' + msgdata.lastname + '" src="'+ msgdata.myprofilepic +'" height="50px" width="50px"></img>'
				     				},{
				     					xtype: 'displayfield',
				     					padding: 7,
				     					flex: 1,
				     					width: '90%',
				     					value: msgdata.mymsg
				     				}]
				     			}]);
							
							var mmsg = Ext.ComponentQuery.query('accordionview menu[name=mymessages] menuitem[name=forumstatus]')[0];
							var curnumofitem = mmsg.newlistno;
							var curnumofitem = curnumofitem + 1;
							mmsg.newlistno = curnumofitem;
							mmsg.setText("<span style='background-color: red; border-radius: 12px; color: white;'><b>&nbsp;" + curnumofitem + "&nbsp;</b></span> in eForums");
							
							
						} // end if rec.data.FORUMCODE
	     			} else if(GLOBAL_VARS_DIRECT.PID == msgdata.recipientpid) {
	     				var mmsg = Ext.ComponentQuery.query('accordionview menu[name=mymessages] menuitem[name=forumstatus]')[0];
						var curnumofitem = mmsg.newlistno;
						var curnumofitem = curnumofitem + 1;
						mmsg.newlistno = curnumofitem;
						mmsg.setText("<span style='background-color: red; border-radius: 12px; color: white;'><b>&nbsp;" + curnumofitem + "&nbsp;</b></span> in eForums");
						
	     			} //end if (fg)
					
				} catch(ev) {
					console.log('err from eforum');
					console.log(ev);
				}
			} else {
				console.log('chat type is unknown');
			} //end websocket
		} else {
			
		}
		return true;
	}

	
	function myTimer(newMsg){
		document.title = (document.title == originalhtmltitle) ? newMsg : originalhtmltitle;
	}
	
	function displayError(message){
		console.log('ws error');
		console.log(message);
	}
	function displayOpen(message){
		console.log('ws Open');
		try {
			var myData = {
				userid: GLOBAL_VARS_DIRECT.USERID,
				type: 'whosecurrentlyloggedon',
				firstname: GLOBAL_VARS_DIRECT.FIRSTNAME,
				lastname: GLOBAL_VARS_DIRECT.LASTNAME,
				middlename: GLOBAL_VARS_DIRECT.MIDDLENAME,
				mymessage: GLOBAL_VARS_DIRECT.MYMESSAGE,
				myprofilepic: GLOBAL_VARS_DIRECT.MYPROFILEPIC,
				companycode: GLOBAL_VARS_DIRECT.COMPANYCODE
			};
			ws.publish("chat",myData);
		} catch(e) {
			console.log('chat error' + e);
		}
	}
	function displayClose(message){
		console.log('ws Close');
		console.log(message);
	}
	
//end for chat application