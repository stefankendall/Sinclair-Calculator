"use strict";
Ext.ns('sinclair');

sinclair.updateOutput = function () {
    var values = Ext.getCmp('input-form').getValues();
    var sex = values.sex;
    var units = values.units;
    var age = values.age;
    var bodyWeightKg = null;
    var liftTotalKg = null;
    if (units === 'kg') {
        bodyWeightKg = parseFloat(values.bodyweight);
        liftTotalKg = parseFloat(values['lift-total']);
    }
    else {
        bodyWeightKg = conversion.lbsToKg(parseFloat(values.bodyweight));
        liftTotalKg = conversion.lbsToKg(parseFloat(values['lift-total']));
    }

    var sinclair = formulas.sinclair(bodyWeightKg, liftTotalKg, sex);
    var sinclairAdjusted = formulas.sinclairMaloneMeltzer(bodyWeightKg, liftTotalKg, sex, parseInt(age));
    Ext.get('sinclair-value').setHTML(sinclair);
    Ext.get('adjustment-factor').setHTML(formulas.data.maloneMeltzerCorrections[parseInt(age)]);
    Ext.get('sinclair-adjusted').setHTML(sinclairAdjusted);
};

sinclair.outputArea = {
    xtype:'panel',
    layout:'fit',
    id:'output',
    flex:1,
    bodyPadding:13,
    html:
        "<table width='100%'><tbody>" +
        "<tr><td width = '50%' class='title'>Sinclair</td><td width='50%' class='value' id='sinclair-value'></td></tr>" +
        "<tr><td class='title'>Correction</td><td class='value' id='adjustment-factor'>1.00</td></tr>" +
        "<tr><td class='title'>Adjusted</td><td class='value' id='sinclair-adjusted'></td></tr>" +
        "</tbody></table>"
};

sinclair.inputForm = {
    flex:1,
    xtype:'formpanel',
    id:'input-form',
    items:[
        {
            xtype:'fieldset',
            style:'margin-top:0px;margin-bottom:7px',
            defaults:{
                labelWidth:'50%'
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
                    label:'Body Weight'
                },
                {
                    name:'age',
                    xtype:'numberfield',
                    label:'Age'
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