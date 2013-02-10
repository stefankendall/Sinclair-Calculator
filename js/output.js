Ext.define('sinclair.OutputArea', {
    extend:'Ext.Panel',
    config:{
        id:'output',
        flex:1,
        bodyStyle:'padding: 7px',
        tpl:"<div>Sinclair</div><div class='value' id='sinclair-adjusted'>{value}</div>",
        data:{value:0}
    }
});
