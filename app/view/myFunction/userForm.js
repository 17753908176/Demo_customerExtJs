/**
 * Created by 赵慧云 on 2018/6/7.
 */
Ext.define("demo.view.myFunction.userForm",{
    extend:'Ext.window.Window',
    alias:'widget.userForm',
    title:'新增数据',
    collapsible:true,
    maximizable:false,//不允许窗口最大化
    draggable :false,
    resizable:false,
    autoShow: true,
    width:255,
    buttonAlign:'center',
    modal:true,
    layout:'fit',
    padding:'2 2 2 2',
    items:[
        {

            xtype:'form',
            layout:'form',
            defaults:{
                //margin:"10 0 0 15",
                labelWidth:50,
                labelAlign:'left',
                selectOnFocus:true,
                width:300,
                msgTarget:"side" //提示信息现在的位置
            },
            defaultType:'textfield',
            items:[
                {
                    fieldLabel:'运单号',
                    name:'orderId'
                },
                {
                    fieldLabel:'姓名',
                    name:'name'
                },
                {
                    fieldLabel:'性别',
                    name:'sex'
                },
                {
                    fieldLabel:'手机号',
                    name:'phone'
                },
                {
                    fieldLabel:'地址',
                    name:'address'
                },
                {
                    fieldLabel:'年龄',
                    name:'age'
                },
                {
                    fieldLabel:'购买日期',
                    name:'date'
                },
                {
                    fieldLabel:'购买产品',
                    name:'production'
                },
                {
                    fieldLabel:'购买价格',
                    name:'price'
                }
            ],
            buttonAlign:'center'
        }],
    buttons:[
        {
            text:'新增',
            action:'add'
        },
        {
            text:'清空',
            action:'clear'
        },
        {
            text:'退出',
            action:'exit'
        }]

})