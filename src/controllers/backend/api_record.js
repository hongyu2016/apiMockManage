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
    static async getDetail(ctx){
        let id=ctx.params.id; //获取参数
        let data=await recordModel.getDetail(id);
        await ctx.render('pages/api_record/detail', {
            detail: data
        })
    }
}

export default ApiRecord;