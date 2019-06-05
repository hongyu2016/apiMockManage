# apiMockManage
<font color=gray >nodejs koa2 前后端开发本地api数据模拟</font>

### nodejs，mysql，使用sequelize来操作数据库
### 基于 koa-generator 生成项目然后在此基础上进行修改
### 该架构适合开发后台管理系统以及restful 前端接口

使用 nunjucks 模板引擎。<br/>
### 目录结构说明：<br/>
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

## 使用说明<br/>
```
import axios from 'axios'  //引入axios插件

axios({
   method: 'post',
   url: 'http://192.168.1.46:8080/api/api-record/api-mock/5',
   data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
   },
   headers: {'X-Requested-With': 'XMLHttpRequest'},//需要加上这个header 后端mock系统根据此字段判断是否为ajax请求
   }).then(function (response) {
      console.log(response.data);
 });

```
