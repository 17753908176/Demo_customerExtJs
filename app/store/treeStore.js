/**
 * Created by 赵慧云 on 2018/6/7.
 */
Ext.define("demo.store.treeStore",{
    extend:'Ext.data.TreeStore',
    defaultRootId:'root',
    root: {
        expanded: true,
        children: [
            { text: "用户信息", expanded: true, id:'100',children: [
                { text: "用户列表", leaf: true, id:'101' },
                { text: "用户分群", leaf: true,id:'102'},
                { text: "用户分析", leaf: true,id:'103'}
            ] },
            { text: "产品概况", expanded: true,id:'200', children: [
                { text: "购买分析", leaf: true,id:'201',},
                { text: "流量分析", leaf: true,id:'202',},
                { text: "趋势分析", leaf: true,id:'203',},
                { text: "关键分析", leaf: true,id:'204',}
            ] },
            { text: "竞品概况", expanded: true, id:'300',children: [
                { text: "购买分析", leaf: true,id:'301', },
                { text: "流量分析", leaf: true,id:'302',},
                { text: "趋势分析", leaf: true,id:'303',},
                { text: "关键分析", leaf: true,id:'304',}
            ] },
            { text: "文件存储", expanded: true/*, children: [
                { text: "购买分析", leaf: true },
                { text: "流量分析", leaf: true},
                { text: "趋势分析", leaf: true},
                { text: "关键分析", leaf: true}
            ]*/ }
        ]
    }
});