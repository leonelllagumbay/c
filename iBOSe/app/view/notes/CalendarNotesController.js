Ext.define('iBOSe.view.notes.CalendarNotesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.notes-calendarnotes',
    
    onAfterRender: function(thisCal) {
    	var datePicker = thisCal.picker;
    	var startDate = new Date(datePicker.textNodes[0].dateValue);
		startDate = Ext.Date.format(startDate, 'Y-m-d');
		var endDate = new Date(datePicker.textNodes[41].dateValue);
		endDate = Ext.Date.format(endDate, 'Y-m-d');
		Ext.administrator.Notes.getDatesToMarkArray(startDate, endDate, function(res) {
			try {
				for(var a=0;a<res.length;a++) {
					for(var b=0;b<42;b++) {
						var ddate = new Date(datePicker.textNodes[b].dateValue);
						ddate = Ext.Date.format(ddate, 'Y-m-d');
						var rdate = Ext.Date.format(new Date(res[a]), 'Y-m-d');
						if(rdate == ddate) {
	    					datePicker.cells.elements[b].className = 'x-datepicker-today x-datepicker-active x-datepicker-cell';
	    				}
					}
				}
			} catch(e) {
				console.log(e);
			}
		});
    },
    
    onSelect: function(thedate,thevalue) {
    	var theDateNoteDisp = Ext.ComponentQuery.query('panel textareafield[name=stickydatenote]')[0];
		var theTempDisp = Ext.ComponentQuery.query('panel displayfield[name=tempVal]')[0];
		var formattedDate = Ext.Date.format(thevalue, "Y-m-d");
		theTempDisp.setValue(formattedDate);
		theDateNoteDisp.setVisible(true);
		theDateNoteDisp.getEl().mask('Please wait...'); 
		Ext.administrator.Notes.getDateNotes(formattedDate, function(res) {
			try {
				theDateNoteDisp.setValue(res);
				CALENDAR_CURRENT_NOTE = res;
				theDateNoteDisp.getEl().unmask(); 
			} catch(e) {
				console.log(e);
				theDateNoteDisp.getEl().unmask(); 
			}
		});
		
		return true;
    },
    
    onBlur: function(thisC) {
    	var val = thisC.getValue();
		if(val.length > 0 && thisC.isDirty() && CALENDAR_CURRENT_NOTE != val) {
			var theTempDisp = Ext.ComponentQuery.query('panel displayfield[name=tempVal]')[0];
			var currentDateVal = theTempDisp.getValue();
			thisC.getEl().mask('Saving...'); 
			Ext.administrator.Notes.saveDateNotes(val,currentDateVal, function(res) {
    			try {
    				var theDateNoteDisp = Ext.ComponentQuery.query('panel textareafield[name=stickydatenote]')[0];
    				theDateNoteDisp.setVisible(false);
    				thisC.getEl().unmask(); 
    			} catch(e) {
    				console.log(e);
    				thisC.getEl().unmask(); 
    			}
    		});
		} else {
			var theDateNoteDisp = Ext.ComponentQuery.query('panel textareafield[name=stickydatenote]')[0];
    		theDateNoteDisp.setVisible(false);
		}
    }
    
});
