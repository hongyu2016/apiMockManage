/**
 * 统一的配置都在这里
 * 环境变量的设置需要安装 npm install cross-env 这个npm包，
 * 使用方式 例如 "dev": "cross-env NODE_ENV=development ./node_modules/.bin/nodemon bin/www",
 */

module.exports={
    //开发环境
    development:{
        port:'8080',
        mysql:{
            user:'root',
            password:'root',
            database:'hong',
            host:'localhost'
        }
    },
    //生产环境
    production:{
        port:'8080',
        mysql:{
            user:'root',
            password:'root',
            database:'hong',
            host:'localhost'
        }
    }
}