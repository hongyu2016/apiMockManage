
export default ()=>{
    if (JSON.stringify(ctx.session) == "{}") {
        ctx.body = { code: 401, msg:'未登录' };
        //ctx.redirect('/server/login')
        //return false;
    }
}