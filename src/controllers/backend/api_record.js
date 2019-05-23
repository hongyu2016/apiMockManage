const recordModel = require('../../models/api_record.model');
const beautify = require('js-beautify').js;  //格式化代码
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
            detail: data,
            code:beautify(data.code_rule, { indent_size: 2, space_in_empty_paren: true }) //格式化代码
        })
    }
    /**
     * 显示新增页面
     * @param {*} ctx 
     */
    static async add(ctx){
        let id=ctx.query.id;
        let data=await recordModel.getDetail(id);
        await ctx.render('pages/api_record/add', {
            detail: data,
            code:beautify(data.code_rule, { indent_size: 2, space_in_empty_paren: true }) //格式化代码
        })
    }
    /**
     * 新增编辑提交
     * @param {*} ctx 
     */
    static async addPost(ctx){
        let params=ctx.request.body;
        params.create_time=new Date();
        params.update_time=new Date();
        
        let data=await recordModel.add(params);
        return ctx.success({ msg:'新增成功',data: data }); 
    }
}

export default ApiRecord;