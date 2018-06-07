/**
 * Created by 马卫涛 on 2018/6/6.
 */
Ext.application({
    name:'demo',
    controllers:['mainControl'],
    appFolder:'../app',
    launch:function(){
        Ext.create('Ext.container.Viewport',{
            layout:'fit',
            items:[{
                width:'100%',
                xtype:'mainlayout'

            }]
        });

    }

});
