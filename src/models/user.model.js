/**
 * server 模块使用
 */
const db = require('../../config/db');
const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/user.js');  //官方建议的做法，导入模型

class UserModel {
    //用户登录
    static async find(name,password) {
        return User.findOne({
            where:{
                name:name,
                password:password
            }
        })
    }
}


module.exports = UserModel;