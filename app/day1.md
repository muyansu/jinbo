:vue-cli 脚手架初始化项目
node + webpack +npm

mode_modules文件夹 项目依赖文件夹

pubulic 防止静态资源 例如图片  注意:放置在此目录下的图片资源 在打包的时候会原封不动的打包到dist文件夹下

src文件夹（程序员源代码文件夹）
    asset文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源） 注意：放置在asset文件夹的静态资源，在webpack打包的时候 webpack会把静态资源当做一个模块，打包在js文件里面
    components文件夹：一般放置的是非路由组件（全局组件）

    App.vue：唯一的根组件 vue中的组件（.vue）
    main.js:程序入口文件，也是整个程序最先执行的文件
    babek.config.js：配置文件（babel相关）
    package.json文件：项目的身份证 记录项目叫做什么，项目有哪些依赖，项目怎么运行
    package-lock.json:缓存性文件
    README.md:说明性文件

2.其他配置
2.1项目运行自动打开浏览器 --open
 "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

2.2 eslint校验功能关闭
    在根目录下的 vue.config.js里面的  
     module.exports = defineConfig({
        transpileDependencies: true,
        //关闭eslint
        // lintOnSave:false
    })
2.3src文件夹简写方法，配置别名。@
    {
        "compilerOptions": {
            "target": "es5",
            "module": "esnext",
            "baseUrl": "./",
            "moduleResolution": "node",
            "paths": {
                "@/*": [
                    "src/*"
                ]
            },
            "lib": [
            "esnext",
            "dom",
            "dom.iterable",
            "scripthost"
            ]
        }
    }
3.项目路由分析
    前端所谓路由：KV键值对。
    key:URL（地址栏中的路径）
    value: 相应的路由组件

    路由组件：
    home首页路由组件，search路由组件，login登录路由  register注册路由
    非路由组件：
    Header【首页，搜索页】
    footer【首页，搜索页】

    

