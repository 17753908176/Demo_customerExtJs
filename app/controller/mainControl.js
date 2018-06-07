Ext.define('demo.controller.mainControl',{
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            //单击左侧树触发右侧Tab事件，同时向后台发送请求，请求数据url
            'deptTree':{
                itemclick:function(tree,  record,  item,  index,  e, eOpts){
                    //获取中间Tab的组件
                    var centerTab=tree.up('mainlayout').down('centertab');
                    //单击用户管理节点，生成一个tab-grid表
                    //找到这个节点
                    //usermanager
                    var id=record.data['id'];
                    if(id=="101"){
                        this.add({
                            centerTab:centerTab,

                            Controller:'demo.controller.userList',

                            ViewXtype:'userList',

                            ViewName:'demo.view.myFunction.userList'
                        })
                    }
                    if(id=='7'){

                        this.add({
                            centerTab:centerTab,

                            Controller:'mainsuperandon.controller.categoryCtrl',

                            ViewXtype:'categorylayout',

                            ViewName:'mainsuperandon.view.category.categoryLayout'
                        })

                    }
                    //生命周期1
                    if(id=='11'){
                        this.add({
                            centerTab:centerTab,

                            Controller:'mainsuperandon.controller.lifecycle1Ctrl',

                            ViewXtype:'lifecyclelayout',

                            ViewName:'mainsuperandon.view.lifecycle1.lifecycle1Layout'

                        })
                    }
                    if(id=='3'){
                        this.add({
                            centerTab:centerTab,

                            Controller:'mainsuperandon.controller.roleCtrl',

                            ViewXtype:'rolelayout',

                            ViewName:'mainsuperandon.view.category.roleLayout'

                        })
                    }
                    //生成资源管理
                    if(id=='4'){

                        this.add({
                            centerTab:centerTab,

                            Controller:'mainsuperandon.controller.resourceCtrl',

                            ViewXtype:'resourcelayout',

                            ViewName:'mainsuperandon.view.resource.resourceLayout'

                        })

                    }
                    //生成用户角色管理
                    if(id=='14'){
                        this.add({
                            centerTab:centerTab,

                            Controller:'mainsuperandon.controller.userroleCtrl',

                            ViewXtype:'userrolelayout',

                            ViewName:'mainsuperandon.view.userrole.userroleLayout'

                        })
                    }
                    if(id=='15'){
                        this.add({
                            centerTab:centerTab,

                            Controller:'mainsuperandon.controller.roleresourceCtrl',

                            ViewXtype:'roleresourcelayout',

                            ViewName:'mainsuperandon.view.roleresource.roleresourceLayout'

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
                var Panel=centertab.down(info.ViewXtype);
                if(!Panel){
                    this.application.getController(info.Controller);
                    Panel=Ext.widget(info.ViewXtype);
                    centertab.add(Panel)
                }
                centertab.setActiveTab(Panel);
            }

        };

    },
    views:['mainLayout','westView','centerTab'],
    stores:['treeStore'],//
    models:[],

    initComponent:function () {
        this.callParent();
    }
})