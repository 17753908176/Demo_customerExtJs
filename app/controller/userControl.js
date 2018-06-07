/**
 * Created by 赵慧云 on 2018/6/7.
 */
/**
 * Created by Couputer on 2016/7/21.
 */
Ext.define('demo.controller.userControl',{
    extend:'Ext.app.Controller',
    views:['myFunction.userList','myFunction.userForm'],
    init:function () {
        this.control({
            //新增表单的新增按钮
            'userForm button[action=add]':{
                click:function (btn) {
                    var form=btn.up('userForm').down('form');
                    var values=form.getForm().getValues();
                    var orderId= values['orderId'];
                    var name=values['name'];
                    var sex=values['sex'];
                    var phone=values['phone'];
                    var address=values['address'];
                    var age=values['age'];
                    var date=values['date'];
                    var production=values['production'];
                    var price=values['price'];

                    var data =[
                        {
                            "orderId":orderId,
                            "name":name,
                            "sex":sex,
                            "phone":phone,
                            "address":address,
                            "age":age,
                            "date":date,
                            "production":production,
                            "price":price

                        }
                    ]
                    var grid=Ext.getCmp('usergird');
                    Ext.Ajax.request({
                        method:"POST",
                        url: 'server/data.json',
                        params:{
                            "orderId":orderId,
                            "name":name,
                            "sex":sex,
                            "phone":phone,
                            "address":address,
                            "age":age,
                            "date":date,
                            "production":production,
                            "price":price
                        },
                        dataType: 'json',
                        success: function(response,options){
                            var resp = Ext.JSON.decode(response.responseText);
                            console.log(resp);
                            if(resp.success == true){
                                grid.getStore().insert(0,data);
                                btn.up('userForm').close();
                                Ext.MessageBox.alert('添加',"添加成功");
                            }else {
                                Ext.MessageBox.alert('添加',"添加失败");
                            }
                        },
                        failure: function(){
                            Ext.MessageBox.alert('状态','添加失败');
                        }
                    })


                }
            },

            //单击新增用户按钮
            'userList button[action=add]':{
                click:function () {
                    var win=Ext.widget('userForm');
                }
            },

        });
    }
})