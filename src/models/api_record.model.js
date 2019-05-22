const db = require('../../config/db');
const Sequelize = db.sequelize;
const Record=Sequelize.import('../schema/api_record.js');  //官方建议的做法，导入模型

class RecordModel{
    static async getList(){
        return Record.findAll()
    }
}

module.exports=RecordModel;