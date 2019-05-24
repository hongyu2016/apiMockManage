/**
 * api模块使用
 */
const db = require('../../config/db');
const Sequelize = db.sequelize;
const Record=Sequelize.import('../schema/api_record.js');  //官方建议的做法，导入模型

class ApiMock{
    //详情
    static async getDetail(id){
        return Record.findOne({
            where:{id}
        })
    }
}

module.exports=ApiMock;