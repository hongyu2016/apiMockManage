const recordModel = require('../../models/api_record.model');
const beautify = require('js-beautify').js;  //格式化代码
class ApiRecord{
    static async getList(ctx){
        let data=await recordModel.getList();   
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
        
        if(id){
            let data=await recordModel.getDetail(id);
            await ctx.render('pages/api_record/add', {
                detail: data,
                code:beautify(data.code_rule, { indent_size: 2, space_in_empty_paren: true }) //格式化代码
            });
            return false;
        }
        
        await ctx.render('pages/api_record/add')
    }
    /**
     * 新增编辑提交
     * @param {*} ctx 
     */
    static async addPost(ctx){
        let params=ctx.request.body;
        let id=params.id;       
        params.update_time=new Date();
        if(id){ //编辑           
            let data=await recordModel.edit(params);
            return ctx.success({ msg:'编辑成功',data: data }); 
        }else{
            params.create_time=new Date();          
            let data=await recordModel.add(params);
            return ctx.success({ msg:'新增成功',data: data }); 
        }
        
    }
    /**
     * 删除
     */
    static async delete(ctx){
        let params=ctx.request.body;
        let id=params.id;
        let data=await recordModel.delete(id);
        return ctx.success({ msg:'删除成功',data: data });       
    }
}

export default ApiRecord;