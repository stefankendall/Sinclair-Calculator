Ext.application({
    launch:function () {
        Ext.create('Ext.Panel', {
            id:'app-panel',
            fullscreen:true,
            layout:{
                type:'vbox',
                align:'stretch'
            },
            listeners:{
                initialize:function () {
                    this.add(Ext.create('sinclair.OutputArea'));
                    this.add(Ext.create('sinclair.InputForm'));
                }
            }
        });
    }
});


