/**
 * Created by 赵慧云 on 2018/6/7.
 */

Ext.define("demo.view.westView",{
    extend:'Ext.tree.Panel',
    alias:'widget.deptTree',
    rootVisible:false,
    dockedItems:[{
        pack: 'center',
        xtype:'toolbar',
        items:[{
            id:'allopen',
            text:'展开全部',
            icon:'assets/admin/images/icons/add.png'
        },{
            id:'allclose',
            text:'收起全部',
            icon:'assets/admin/images/icons/delete.png'
        }]
    }
    ],
    store:'treeStore',
    initComponent:function () {
        this.callParent();
    }

});