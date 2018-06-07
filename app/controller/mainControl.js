Ext.define('demo.controller.mainControl',{
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            //单击左侧树触发右侧Tab事件，同时向后台发送请求，请求数据url
            'deptTree':{
                itemclick:function(tree,  record){
                    //获取中间Tab的组件
                    var centerTab=tree.up('mainlayout').down('centertab');
                    //单击用户管理节点，生成一个tab-grid表
                    //找到这个节点
                    //usermanager
                    var id=record.data['id'];
                    if(id == 101){
                        this.add({
                            centerTab:centerTab,
                            Controller:'demo.controller.userControl',
                            ViewXtype:'userList',
                            ViewName:'demo.view.myFunction.userList'
                        })
                    }
                }
            },
            // 展开全部
            'deptTree button[id=allopen]':{
                click:function (btn) {
                    var tree=  btn.findParentByType('deptTree');
                    tree.expandAll();
                }
            },
            'deptTree button[id=allclose]':{
                click:function (btn) {
                    var tree=  btn.findParentByType('deptTree');
                    tree.collapseAll();
                }
            }
        });
        //生成resource   tab
        this.add=function(info){
            if(info){
                var centertab=info.centerTab;
                var Panel;
                if(!Panel){
                    var c = this.application.getController(info.Controller);
                    c.init(this.application);
                    Panel=Ext.widget(info.ViewXtype);
                    centertab.down(info.ViewXtype);
                    centertab.add(Panel)
                }
                centertab.setActiveTab(Panel);
            }

        };

    },
    views:['mainLayout','westView','centerTab'],
    stores:['treeStore'],
    initComponent:function () {
        this.callParent();
    }
})