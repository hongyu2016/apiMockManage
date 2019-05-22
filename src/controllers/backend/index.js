
class Index{
    static async index(ctx){
        await ctx.render('index', {
            title: '你好'
        }) 
    }
}
export default Index