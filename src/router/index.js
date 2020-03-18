import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
const Detail = () =>
    import ('../views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: '/home',
        component: Home
    },
    {
        path: '/category',
        name: '/category',
        component: Category
    },
    {
        path: '/cart',
        name: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        name: '/profile',
        component: Profile
    },
    {
        path: '/detail',
        name: '/detail',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出router
export default router