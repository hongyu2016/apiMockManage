/**
 * 管理后台的路由
 */
import {Index,BackendArticle,ApiRecord} from '../controllers/backend.export'
//const {BackendArticle} = require('../controllers/backend.export')
const router = require('koa-router')();
router.prefix('/server'); //路由前缀

router
    .get('/',Index.index)
    //.get('/list',BackendArticle.getList)
    .get('/api-record',ApiRecord.getList)
    .get('/api-record/detail/:id',ApiRecord.getDetail)
    .get('/api-record/add',ApiRecord.add)
    .post('/api-record/addPost',ApiRecord.addPost)
module.exports = router;    