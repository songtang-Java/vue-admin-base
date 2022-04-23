import Vue from 'vue'
import Router from 'vue-router'
// import Cookie from 'js-cookie'; // cookie.js
import Layout from '@/layout'; /* Layout */

Vue.use(Router);

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/Index/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: '/manage/userlist',
    meta: { title: '数据管理', icon: 'el-icon-document' },
    name: 'Manage',
    children: [
      {
        path: 'userlist',
        name: 'UserList',
        component: () => import('@/views/manageList/userList'),
        meta: { title: '用户列表', icon: 'dashboard' }
      },
      {
        path: 'adminlist',
        name: 'AdminList',
        component: () => import('@/views/manageList/adminList'),
        meta: { title: '管理员列表', icon: 'dashboard' }
      },
      {
        path: 'shoplist',
        name: 'ShopList',
        component: () => import('@/views/manageList/shopList'),
        meta: { title: '商家列表', icon: 'dashboard' }
      },
    ]
  }
]

const router = new Router({
  mode: 'history', // require service support
  base: process.env.BASE_URL,
  routes: constantRoutes
})

// // 路由全局守卫
// router.beforeEach((to, from, next) => {
//   let token = Cookie.get("adminToken");
//   if(token) {
//     if (to.path === '/login') {
//       next({path: '/'})
//     }
//     next();
//   } else {
//     if(to.path !== "/login") { // 没有登录，它想访问其它页面，让它到达登录页面
//       sessionStorage.removeItem('vuex');
//       next({path: "/login"});
//     } else { // 没有登录，但是人家去访问Login，则放行
//       next();
//     }
//   }
// });

export default router
