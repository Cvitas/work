/**
 * Created by cx on 2017/8/16.
 * Include
 * description
 */
const Parent = resolve => require(['../pages/app.vue'], resolve);//首页面
const page1 = resolve => require(['../pages/page1.vue'], resolve);//页面1
const page2 = resolve => require(['../pages/page2.vue'], resolve);//页面2
const page3 = resolve => require(['../pages/page3.vue'], resolve);//页面3
const page4 = resolve => require(['../pages/page4.vue'], resolve);//页面4
export default {
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/',
        component: Parent,
        name: "parent",
        meta:{title:"智慧社区"},
        children: [
            {path: "/page1", name: "page1", component: page1,meta:{title:"智慧政务"}},
            {path: "/page2", name: "page2", component: page2,meta:{title:"智慧管理"}},
            {path: "/page3", name: "page3", component: page3,meta:{title:"智慧服务"}},
            {path: "/page4", name: "page4", component: page4,meta:{title:"我的生活"}},
        ]}
    ]}