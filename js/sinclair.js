"use strict";
Ext.ns('sinclair');

sinclair.updateOutput = function(){
    var values = Ext.getCmp('input-form').getValues();

};

sinclair.outputArea = {
    flex:1,
    html:"Output"
};

sinclair.inputForm = {
    flex:1,
    xtype:'formpanel',
    id: 'input-form',
    items:[
        {
            xtype:'fieldset',
            style:'margin-top:0px;margin-bottom:7px',
            defaults:{
                labelWidth:'50%'
            },
            items:[
                {
                    name: 'lift-total',
                    xtype:'numberfield',
                    label:'Lift Total'
                },
                {
                    name: 'bodyweight',
                    xtype:'numberfield',
                    label:'Body Weight'
                },
                {
                    name: 'age',
                    xtype:'numberfield',
                    label:'Age'
                },
                {
                    name: 'units',
                    xtype:'selectfield',
                    label:'Units',
                    options:[
                        {text:'kg', value:'kg'},
                        {text:'lbs', value:'kg'}
                    ]
                }
            ]
        },
        {
            xtype:'button',
            text:'Go!',
            ui:'confirm',
            handler:sinclair.updateOutput
        }
    ]
};
sinclair.MainForm = Ext.extend(Ext.Panel, {
    fullscreen:true,
    layout:{
        type:'vbox',
        align:'stretch'
    },
    items:[
        sinclair.outputArea,
        sinclair.inputForm
    ]
});