module.exports=async (ctx,next)=>{
    const dontNeedCheck=[
        '/server/login', 
        '/server/dologin', 
        '/server/logout',
        '/server/api-record/delete',
        '/server/api-record/addPost'
    ];
 
    let url = ctx.originalUrl 
    
    if(dontNeedCheck.indexOf(url)>-1){     
        console.log('可以访问')       
    }else{
        if(JSON.stringify(ctx.session) == "{}"){
            ctx.redirect('/server/login')
        }
       
    }
    await next()
}