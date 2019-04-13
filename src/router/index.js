import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/home',
        },
        // 管理员路由
        {
         path:'/adminLogin',
         name:'adminLogin',
         component: resolve => require(['@/components/admin/adminlogin'], resolve)
        },
        
        {
            path:'/admincenter',
            name:'admincenter',
            component: resolve => require(['@/components/admin/adminCenter'], resolve)
        },
        {
            path:'/addbook',
            name:'addbook',
            component:resolve => require(['@/components/admin/addbook'], resolve)
        },
        {
            path:'/adminuserlist',
            name:'adminuserlist',
            component:resolve => require(['@/components/admin/adminuser'], resolve)
        },
        // 用户路由
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/register',
            name: 'register',
            component: resolve => require(['@/components/Register'], resolve)
        },
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['@/components/Home'], resolve)
        },
        {
            path: '/search',
            name: 'search',
            component: resolve => require(['@/components/Search'], resolve)
        },
        {
            path: '/category',
            name: 'category',
            component: resolve => require(['@/components/Category'], resolve)
        },
        {
            path: '/book',
            name: 'book',
            component: resolve => require(['@/components/BookDetail'], resolve)
        },
        {
            path: '/content',
            name: 'content',
            component: resolve => require(['@/components/Reader'], resolve)
        },
        {
            path: '/person',
            name: 'person',
            component: resolve => require(['@/components/Personal'], resolve),
        },
        {
            path: '/shelf',
            name: 'shelf',
            component: resolve => require(['@/components/BookShelf'], resolve)
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {x: 0, y: 0}
    }
})
