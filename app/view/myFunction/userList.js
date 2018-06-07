/**
 * Created by 赵慧云 on 2018/6/7.
 */
Ext.define("demo.view.myFunction.userList",{
    extend:'Ext.panel.Panel',
    alias:'widget.userList',
    title:'用户列表',
    closable:true,
    layout:'border',
    //height:'100%',
    items:[
        {
            region:'center',
            xtype:'grid',
            id:'usergird',
            tbar:[
                {
                    text:'添加',
                    action:'add',
                    listeners: {
                        click: {
                            fn: function(){

                            }
                        }
                    }
                }
            ],
            store: new Ext.data.Store({
                storeId:'simpsonsStore',
                fields:['orderId', 'name','sex','phone','address','age','date','production','price'],
                data:{'items':[
                    { 'orderId': '0001',  "name":"周婷婷", "sex":'男', "phone":"18888888888",'address':'山东临沂','age':'21','date':'2018-02-02','production':'舒尔佳','price':'180RMB'},
                    { 'orderId': '0001',  "name":"周婷婷", "sex":'男',  "phone":"18888888888",'address':'山东临沂','age':'21','date':'2018-02-02','production':'舒尔佳','price':'180RMB'},
                    { 'orderId': '0001',  "name":"周婷婷", "sex":'男', "phone":"18888888888",'address':'山东临沂','age':'21','date':'2018-02-02','production':'舒尔佳','price':'180RMB'},
                    { 'orderId': '0001',  "name":"周婷婷", "sex":'男',"phone":"18888888888",'address':'山东临沂','age':'21','date':'2018-02-02','production':'舒尔佳','price':'180RMB'},
                    { 'orderId': '0001',  "name":"周婷婷", "sex":'男',"phone":"18888888888",'address':'山东临沂','age':'21','date':'2018-02-02','production':'舒尔佳','price':'180RMB'},
                ]},
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json',
                        root: 'items'
                    }
                }
            }),
            columns: [
                { header: '订单号',  dataIndex: 'orderId',flex: 1 },
                { header: '姓名', dataIndex: 'name', flex: 1 },
                { header: '性别', dataIndex: 'sex', flex: 1 },
                { header: '电话', dataIndex: 'phone', flex: 1 },
                { header: '地址', dataIndex: 'address', flex: 1 },
                { header: '年龄', dataIndex: 'age', flex: 1 },
                { header: '日期', dataIndex: 'date', flex: 1 },
                { header: '产品', dataIndex: 'production', flex: 1 },
                { header: '价格', dataIndex: 'price', flex: 1 }
            ],
        }
    ]

})