"use strict";
Ext.ns('formulas.util',
    'formulas.data');

formulas.sinclair = function (bodyWeightKg, liftTotalKg, sex) {
    //http://www.qwa.org/Liftstats/2009Sinclair.pdf
    var b = sex == "male" ? 173.961 : 125.441;
    var x = bodyWeightKg;
    var X = formulas.util.log10(x / b);
    var A = sex == "male" ? 0.784780654 : 1.056683941;

    var sinclairCoefficient = x > b ? 1 : Math.pow(10,
        A * X * X);
    return liftTotalKg * sinclairCoefficient;
};

formulas.sinclairMaloneMeltzer = function (bodyWeightKg, liftTotalKg, sex, age) {
    //http://www.qwa.org/Liftstats/2009Sinclair.pdf
    var sinclair = formulas.sinclair(bodyWeightKg,
        liftTotalKg,
        sex);
    var ageCoefficient = null;
    if (age <= 30) {
        ageCoefficient = 1;
    }
    else {
        ageCoefficient = formulas.data.maloneMeltzerCorrections[age];
    }

    return sinclair * ageCoefficient;
};

formulas.data.maloneMeltzerCorrections = {
    30:1.000,
    31:1.014,
    32:1.028,
    33:1.043,
    34:1.058,
    35:1.072,
    36:1.087,
    37:1.100,
    38:1.113,
    39:1.125,
    40:1.136,
    41:1.147,
    42:1.158,
    43:1.170,
    44:1.183,
    45:1.195,
    46:1.207,
    47:1.217,
    48:1.226,
    49:1.234,
    50:1.243,
    51:1.255,
    52:1.271,
    53:1.293,
    54:1.319,
    55:1.350,
    56:1.384,
    57:1.417,
    58:1.449,
    59:1.480,
    60:1.509,
    61:1.536,
    62:1.561,
    63:1.584,
    64:1.608,
    65:1.636,
    66:1.671,
    67:1.719,
    68:1.782,
    69:1.856,
    70:1.933,
    71:2.002,
    72:2.053,
    73:2.087,
    74:2.113,
    75:2.142,
    76:2.184,
    77:2.251,
    78:2.358,
    79:2.500,
    80:2.669,
    81:2.849,
    82:3.018,
    83:3.166,
    84:3.288,
    85:3.386,
    86:3.458,
    87:3.508,
    88:3.540,
    89:3.559,
    90:3.571
};

formulas.util.log10 = function (val) {
    return Math.log(val) / Math.log(10);
};

formulas.util.roundTo3Digits = function (val) {
    var valTimes1000 = parseInt(Math.round(val * 1000));
    return valTimes1000 / 1000.0;
};