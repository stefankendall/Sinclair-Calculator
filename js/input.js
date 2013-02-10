Ext.define('sinclair.InputForm', {
    extend:'Ext.form.Panel',
    config:{
        listeners:{
            painted:sinclair.updateOutput
        },
        flex:2,
        xtype:'formpanel',
        id:'input-form',
        items:[
            {
                xtype:'fieldset',
                style:'margin-top:0px;margin-bottom:7px',
                defaults:{
                    labelWidth:'50%',
                    listeners:{
                        change:sinclair.updateOutput
                    }
                },
                items:[
                    {
                        name:'lift-total',
                        xtype:'numberfield',
                        label:'Lift Total'
                    },
                    {
                        name:'sex',
                        xtype:'selectfield',
                        label:'Sex',
                        options:[
                            {text:'Male', value:'male'},
                            {text:'Female', value:'female'}
                        ]
                    },
                    {
                        name:'bodyweight',
                        xtype:'numberfield',
                        label:'Body Weight',
                        value:72
                    },
                    {
                        name:'age',
                        xtype:'numberfield',
                        label:'Age',
                        value:30
                    },
                    {
                        name:'units',
                        xtype:'selectfield',
                        label:'Units',
                        options:[
                            {text:'kg', value:'kg'},
                            {text:'lbs', value:'lbs'}
                        ]
                    }
                ]
            }
        ]
    }
});