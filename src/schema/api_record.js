const moment = require('moment');
module.exports= (sequelize,DataTypes)=>{
    return sequelize.define('h_api_record',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            aotuIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'name'
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:true,
            field:'content'
        },
        create_time:{
            allowNull:true,
            type:DataTypes.DATE,
            field:'create_time',
            get(){
                return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss'); //修正时区不对问题
            }
        },
        update_time:{
            allowNull:true,
            type:DataTypes.DATE,
            field:'update_time',//需要查询的字段
            get(){
                return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss'); //修正时区不对问题
            }
        }
        
    },{
        freezeTableName:true,
        createdAt:false, //关闭默认创建时间字段
        updatedAt:false //关闭默认更新时间字段
    })
}