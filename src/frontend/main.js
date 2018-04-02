import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import index from './page/index.vue'
import archives from './page/archives.vue'
import about from './page/about.vue'
import login from './page/login.vue'
import manager from './page/manager.vue'
import section from './components/section.vue'
import content from './components/content.vue'

// import 'font-awesome/css/font-awesome.css'

//模块化工程中安装路由功能
Vue.use(VueRouter);
Vue.use(Vuex);

var routes = [{
        path: '/index',
        component: index,
        children: [{
                path: 'content',
                component: content,
            },
            {
                path: '',
                component: section,
            }
        ]
    },
    {
        path: '/archives',
        component: archives
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/manager',
        name: 'manager',
        meta: {
            requireAuth: true,
        },
        component: manager
    }
];


const router = new VueRouter({
    routes
})

//全局守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (bus.login) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                },
            })
        }
    } else {
        next();
    }
})

new Vue({
    el: '#app',
    router,
    ...App,
})

var data = {
    login: false 
}

window.bus = new Vue({
    data: data
});