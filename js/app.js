"use strict";
new Ext.Application({
    viewport:null,
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'apple-touch-icon.png',
    glossOnIcon: false,
    launch: function() {
        this.viewport = new this.Viewport();
    },
    Viewport: Ext.extend(Ext.Panel, {
        id: 'app-panel',
        fullscreen: true,
        layout:{
            type:'vbox',
            align:'stretch'
        },
        items:[
            sinclair.outputArea,
            sinclair.inputForm
        ]
    })
});


