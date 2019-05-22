const db = require('../../config/db');
const Sequelize = db.sequelize;
const Record=Sequelize.import('../schema/api_record.js');

class RecordModel{
    static async getList(){
        return Record.findAll()
    }
}

module.exports=RecordModel;