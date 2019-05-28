import base from './base';
import User from '../../models/user.model';
class UserControl {
    /**
     * 显示登录页面
     * @param {*} ctx 
     */
    static async login(ctx) {
        await ctx.render('login',{
        })
        console.log(ctx.session)
    }
    /**
     * 登录
     */
    static async dologin(ctx){
        let name=ctx.request.body.name
        let password=ctx.request.body.password
        let data=await User.find(name,password)
        if(data){
            ctx.session.logged = true;//设置登录状态
            return ctx.success({ msg:'登录成功',data: [] }); //统一响应格式
        }else{
            ctx.session.logged = false;
            return ctx.success({ msg:'用户名或密码错误',data: [],code:0 }); //统一响应格式
        }
    }
    /**
     * 注销登录
     */
    static async logout(ctx){
        ctx.session = null;//清除会话
        //ctx.session.logged = false;
        return ctx.success({ msg:'推出成功',data: [] }); 
    }
}

export default UserControl;