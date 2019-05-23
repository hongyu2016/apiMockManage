const db = require('../../config/db');
const Sequelize = db.sequelize;
const Record=Sequelize.import('../schema/api_record.js');  //官方建议的做法，导入模型

class RecordModel{
    static async getList(){
        return Record.findAll()
    }
    static async getDetail(id){
        return Record.findOne({
            where:{id}
        })
    }
    static async add(data){
        return Record.create({
            name:data.name,
            remark:data.remark,
            code_rule:data.code_rule,
            create_time:data.create_time,
            update_time:data.update_time
        })
    }
    static async edit(data){
        return Record.update({
            name:data.name,
            remark:data.remark,
            code_rule:data.code_rule,
            update_time:data.update_time
        },{
            where:{
                id:data.id
            }
        })
    }
}

module.exports=RecordModel;