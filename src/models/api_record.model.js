/**
 * server 模块使用
 */
const db = require('../../config/db');
const Sequelize = db.sequelize;
const Record=Sequelize.import('../schema/api_record.js');  //官方建议的做法，导入模型

class RecordModel{
    //列表
    static async getList(){
        return Record.findAll()
    }
    //详情
    static async getDetail(id){
        return Record.findOne({
            where:{id}
        })
    }
    //添加
    static async add(data){
        return Record.create({
            name:data.name,
            remark:data.remark,
            code_rule:data.code_rule,
            create_time:data.create_time,
            update_time:data.update_time
        })
    }
    //编辑
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
    //删除
    static async delete(id){
        return Record.destroy({
            where:{
                id
            }
        })
    }
}

module.exports=RecordModel;