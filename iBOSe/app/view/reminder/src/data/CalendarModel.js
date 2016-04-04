Ext.define('iBOSe.view.reminder.src.data.CalendarModel', {
    extend: 'Ext.data.Model',
    
    requires: [
        'iBOSe.view.reminder.src.data.CalendarMappings'
    ],
    
    identifier: 'sequential',
    
    statics: {
        /**
         * Reconfigures the default record definition based on the current {@link Ext.calendar.data.CalendarMappings CalendarMappings}
         * object. See the header documentation for {@link Ext.calendar.data.CalendarMappings} for complete details and 
         * examples of reconfiguring a CalendarRecord.
         *
         * **NOTE**: Calling this method will *not* update derived class fields. To ensure
         * updates are made before derived classes are defined as an override. See the
         * documentation of `Ext.calendar.data.CalendarMappings`.
         *
         * @static
         * @return {Class} The updated CalendarModel
         */
        reconfigure: function(){
            var me = this,
                Mappings = iBOSe.view.reminder.src.data.CalendarMappings;
       
            // It is critical that the id property mapping is updated in case it changed, since it
            // is used elsewhere in the data package to match records on CRUD actions:
            me.prototype.idProperty = Mappings.CalendarId.name || 'id';

            me.replaceFields(Ext.Object.getValues(Mappings), true);

            return me;
        }
    }
},
function() {
    this.reconfigure();
});
