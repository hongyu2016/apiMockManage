module.exports = async (ctx, next) => {
    const dontNeedCheck = [
        '/server/login',
        '/server/dologin',
        '/server/logout',
    ];

    let url = ctx.originalUrl;
    let isAjax=ctx.request.header['x-requested-with']; //XMLHttpRequest 有值说明是ajax请求，undifinded则是正常的html get
    console.log('是否ajax'+isAjax)
    if (dontNeedCheck.indexOf(url) > -1) {
        console.log('可以访问')
    } else {
        if (JSON.stringify(ctx.session) == "{}") {
            var _url=url.split('/');
            // isAjax
            if(!isAjax){
                //重定向所有页面到登录页面
                ctx.redirect('/server/login')
            }else{       
                //拦截所有通过ajax的请求  api对外接口不拦截 server里面的接口才拦截     
                if(url!=='/api/api-record/api-mock/'+_url[_url.length-1]){
                    ctx.body={code:401, msg:'你还没有登录' }
                    return false;            
                }
                
            }
            
        }

    }
    await next()
}