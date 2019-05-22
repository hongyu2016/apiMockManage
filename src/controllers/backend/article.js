
const ArticleModel = require('../../models/article.model')

class BackendArticle {
    static async getList(ctx){
        console.log('查询接口')   
        //返回数据给view模板
        let data=await ArticleModel.getArticleList();   
        /* await ctx.render('index', {
            title: '你好 Koa 2!'
        }) */
 
        //返回json接口
        
        /* ctx.body={
          data: data
        } */
        return ctx.success({ msg:'获取成功',data: data }); //统一响应格式
    }
}

export default BackendArticle;
//module.exports=BackendArticle