"use strict";
Ext.ns('sinclair');

sinclair.formatFloatForDisplay = function (value) {
    return parseInt(Math.round(value * 1000.0)) / 1000.0;
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

    var sinclairAdjusted = formulas.sinclairMaloneMeltzer(bodyWeightKg, liftTotalKg, sex, parseInt(age));
    sinclairAdjusted = isNaN(sinclairAdjusted) ? 0 : sinclairAdjusted;

    Ext.getCmp('output').setData({value:sinclair.formatFloatForDisplay(sinclairAdjusted)});
};