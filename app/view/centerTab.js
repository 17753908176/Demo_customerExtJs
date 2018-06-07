/**
 * Created by 赵慧云 on 2018/6/7.
 */
/**
 * Created by Couputer on 2016/7/20.
 */
Ext.define("demo.view.centerTab",{
    extend:'Ext.tab.Panel',
    alias:'widget.centertab',
    border:0,
    bodyStyle:'padding:0px',
    layout:'fit',
    items:[
        {
            title:'首页',
            html:'首页内容',
            layout:'fit'
        }],

    initComponent:function(){

        this.callParent();

    }
})