"use strict";
Ext.ns('sinclair');

sinclair.formatFloatForDisplay = function (value) {
    return parseInt(Math.round(value * 1000.0)) / 1000.0;
};

sinclair.updateCorrection = function () {
    var age = Ext.getCmp('input-form').getValues().age;
    var correction = formulas.data.maloneMeltzerCorrections[parseInt(age)];
    correction = correction ? correction : 1;
    Ext.get('adjustment-factor').setHTML(sinclair.formatFloatForDisplay(correction));
};

sinclair.updateOutput = function () {
    var values = Ext.getCmp('input-form').getValues();
    var sex = values.sex;
    var units = values.units;
    var age = values.age ? values.age : 30;
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

    var sinclairValue = formulas.sinclair(bodyWeightKg, liftTotalKg, sex);
    var sinclairAdjusted = formulas.sinclairMaloneMeltzer(bodyWeightKg, liftTotalKg, sex, parseInt(age));
    sinclairValue = isNaN(sinclairValue) ? 0 : sinclairValue;
    sinclairAdjusted = isNaN(sinclairAdjusted) ? 0 : sinclairAdjusted;

    window.test = sinclairValue;
    Ext.get('sinclair-value').setHTML(sinclair.formatFloatForDisplay(sinclairValue));
    sinclair.updateCorrection();
    Ext.get('sinclair-adjusted').setHTML(sinclair.formatFloatForDisplay(sinclairAdjusted));
};

sinclair.outputArea = {
    xtype:'panel',
    id:'output',
    flex:1,
    bodyStyle: 'padding: 4px 13px 13px 13px',
    html:"<table width='100%'><tbody>" +
        "<tr><td width = '66%' class='title'>Sinclair</td><td width='50%' class='value' id='sinclair-value'></td></tr>" +
        "<tr><td class='title'>Correction</td><td class='value' id='adjustment-factor'></td></tr>" +
        "<tr><td class='title'>Adjusted</td><td class='value' id='sinclair-adjusted'></td></tr>" +
        "</tbody></table>"
};

sinclair.inputForm = {
    listeners:{
        afterrender:sinclair.updateOutput
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
                    value: 72
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
};