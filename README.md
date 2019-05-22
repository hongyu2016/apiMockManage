# koa2Project
nodejs koa2 前后端开发架构模型

# nodejs，mysql，使用sequelize来操作数据库
## 基于 koa-generator 生成项目然后在此基础上进行修改
## 该架构的修改为了适合开发后台管理系统以及restful 前端接口

使用 handlebars 模板引擎。<br/>
## 目录结构说明：<br/>
1.bin 目录为项目启动入口目录<br/>
2.config 目录为项目配置目录，db.js为sequelize对数据库的配置，common.js为开发环境和生产环境的配置（环境变量的设置需要安装 npm install cross-env 这个npm包）<br/>
3.public 为静态资源目录<br/>
4.src 为整个项目开发源代码目录，
5.views 为后台管理系统模板页面
### src内目录说明：
1.controllers 为控制器，主要处理用户的请求，业务逻辑
2.middlewares 为中间件
3.models 为 模型使用
4.schema 为数据表模型，定义需要查询的表以及字段
5.routes 为路由，将控制映射到路由
6.utils 为工具函数
