//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); 
//引入路由组件
import Home from '@/page/Home/home';
import Search from '@/page/Search/search';
import Login from '@/page/Login/login';
import Register from '@/page/Register/register'
const router =  new VueRouter({
    //配置路由
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                show:true,
                title:'苏慕烟'
            }

        },
        {
            path:'/search',
            component:Search,
            meta:{
                show:true,
                title:'搜索'
            }

        },
        {
            path:'/Login',
            component:Login,
            meta:{
                show:false,
                title:'登录'
            }

        },
        {
            path:'/register',
            component:Register,
            meta:{
                show:false,
                title:'注册'
            }

        },
        //重定向
        {
            path:'*',
            redirect:'/home'
        }
    ]



});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
  });
export default router;