const recordModel = require('../../models/api_record.model');

class ApiRecord{
    static async getList(ctx){
        let data=await recordModel.getList();   
        console.log(data)
        await ctx.render('pages/api_record/list', {
            list: data
        })
 
        //返回json接口
        
        //return ctx.success({ msg:'获取成功',data: data }); //统一响应格式
    }
}

export default ApiRecord;