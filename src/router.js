import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import OrderList from './pages/orderList'
// import OrderPay from './pages/orderPay'
// import OrderConfirm from './pages/orderConfirm'
// import AliPay from './pages/alipay'
// import Login from './pages/login'
// import { resolve } from 'core-js/fn/promise'

Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'/product/:id',
                    name:'product',
                    component:resolve=>require(['./pages/product.vue'],resolve),
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:resolve=>require(['./pages/detail.vue'],resolve),
                },
            ]
        },
        {
            path:'/login',
            name:'login',
            component:resolve=>require(['./pages/login.vue'],resolve),
        },
        {
            path:'/register',
            name:'register',
            component:resolve=>require(['./pages/register.vue'],resolve),
        },
        {
            path:'/cart',
            name:'cart',
            component:resolve=>require(['./pages/cart.vue'],resolve),
        },
        {
            path:'/order',
            name:'order',
            component:resolve=>require(['./pages/order.vue'],resolve),
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:resolve=>require(['./pages/orderList.vue'],resolve),
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:resolve=>require(['./pages/orderPay.vue'],resolve),
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:resolve=>require(['./pages/orderConfirm.vue'],resolve),
                },
                {
                    path:'alipay',
                    name:'ali-pay',
                    component:resolve=>require(['./pages/alipay.vue'],resolve),
                }
            ]
        }

    ]
})