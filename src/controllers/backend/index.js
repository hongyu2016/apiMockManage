
class Index{
    static async index(ctx){
        await ctx.render('home', {
            title: '你好'
        }) 
    }
    static async index2(ctx){
        await ctx.render('index', {
            title: '你好'
        }) 
    }
    static async test(ctx){
        await ctx.render('test', {
            title: '你好'
        }) 
    }
}
export default Index