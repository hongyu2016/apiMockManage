/**
 * 数据库连接配置
 */
const Sequelize=require('sequelize');
const configFile=require('./common');
const mysql =configFile[process.env.NODE_ENV].mysql; //根据开发环境取配置

/**
 * 数据库名称，数据库连接用户，数据库连接密码，其他配置信息
 */
const sequelize=new Sequelize(mysql.database,mysql.user,mysql.password,{
    host:mysql.host,//数据库地址
    dialect:'mysql',
    //operatorsAliases:false,
    dialectOptions:{
        charset:'utf8mb4',//数据库字符
        //collate:'utf8mb4_unicode_ci',
        supportBigNumbers:true,
        bigNumberStrings:true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    timezone:'+08:00'
    
});

module.exports = {sequelize};
