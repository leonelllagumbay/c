/*
 * Internal drag zone implementation for the calendar day and week views.
 */
Ext.define('iBOSe.view.reminder.src.dd.DayDragZone', {
    extend: 'iBOSe.view.reminder.src.dd.DragZone',
    requires: [
        //'iBOSe.view.reminder.src.data.EventMappings'
    ],

    ddGroup: 'DayViewDD',
    resizeSelector: '.ext-evt-rsz',

    getDragData: function(e) {
        var startDateName = iBOSe.view.reminder.src.data.EventMappings.StartDate.name,
            endDateName = iBOSe.view.reminder.src.data.EventMappings.EndDate.name,
            t, p, rec;
        
        t = e.getTarget(this.resizeSelector, 2, true);
        
        if (t) {
            p = t.parent(this.eventSelector);
            rec = this.view.getEventRecordFromEl(p);

            return {
                type: 'eventresize',
                ddel: p.dom,
                eventStart: rec.get(startDateName),
                eventEnd: rec.get(endDateName),
                proxy: this.proxy
            };
        }
        
        t = e.getTarget(this.eventSelector, 3);
        if (t) {
            rec = this.view.getEventRecordFromEl(t);
            return {
                type: 'eventdrag',
                ddel: t,
                eventStart: rec.get(startDateName),
                eventEnd: rec.get(endDateName),
                proxy: this.proxy
            };
        }

        // If not dragging/resizing an event then we are dragging on
        // the calendar to add a new event
        t = this.view.getDayAt(e.getX(), e.getY());
        if (t.el) {
            return {
                type: 'caldrag',
                dayInfo: t,
                proxy: this.proxy
            };
        }
        return null;
    }
});