const db = require('../../config/db');
const Sequelize = db.sequelize;
const Article = Sequelize.import('../schema/article');

class ArticleModel {
    static async getDetailById(id){
        return await Article.findOne({
            where:{id}
        })
    }
    static async getArticleList(){
        return await Article.findAll()
    }
}
//export default ArticleModel;
module.exports=ArticleModel;