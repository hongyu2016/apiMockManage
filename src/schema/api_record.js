import moment from 'moment'

export default function (sequelize,DataTypes){   
    return sequelize.define('h_api_record',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:true,
            aotuIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'name'
        },
        remark:{
            type:DataTypes.TEXT,
            allowNull:true,
            field:'remark'
        },
        code_rule:{
            type:DataTypes.TEXT,
            allowNull:true,
            field:'code_rule'
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
                return moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm:ss'); //修正时区不对问题
            }
        }
        
    },{
        freezeTableName:true,
        createdAt:false, //关闭默认创建时间字段
        updatedAt:false //关闭默认更新时间字段
    })
}