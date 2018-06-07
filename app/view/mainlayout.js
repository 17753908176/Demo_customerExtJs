Ext.define("demo.view.mainLayout",{
    extend:'Ext.panel.Panel',
    alias:'widget.mainlayout',

    defaults:{
        bodyStyle:'padding 1px'
    },
    layout:'border',

    items:[
        {
            titleAlign:'center',
            collapsible:true,
            split:true,
            region:'north',
            html:"<h2>鲁南制药有限公司</h2>",
            height:90,
            minHeight:90,
            maxHeight:90

        },
        {
            title:'功能模块',
            titleAlign:'center',
            split:true,
            region:'west',
            width:160,
            minWidth:160,
            maxWidth:160,
            xtype:'panel',
            //margins:'5 2 5 5',
            collapsible:true,
            id:'west-tree',
            layout:'fit',
            items:[
                {
                    xtype:'deptTree'
                }
            ]
        },
        {
            title:'主界面',
            titleAlign:'center',
            region:'center',
            split:true,
            xtype:'panel',
            id:'caenter-tb',
            // margins:'5 5 5 0',
            layout:'fit',
            items:[
                {
                    id:'dept-tab',
                    xtype:'centertab'
                }
            ]

        },
        {
            title:'页尾',
            height:50,
            collapsible:true,
            html:'&copy;版权所有',
            region:'south'
        }
    ]

});