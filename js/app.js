"use strict";
new Ext.Application({
    viewport:null,
    launch: function() {
        this.viewport = new this.Viewport();
    },
    Viewport: Ext.extend(Ext.Panel, {
        id: 'app-panel',
        fullscreen: true,
        items: [
            new sinclair.MainForm()
        ],
        listeners: {
        }
    })
});


