/**
 * 管理后台的路由
 */
import {Index,BackendArticle,ApiRecord} from '../controllers/backend.export'
//const {BackendArticle} = require('../controllers/backend.export')
const router = require('koa-router')();
router.prefix('/server'); //路由前缀

router
    .get('/list',BackendArticle.getList)
    .get('/',Index.index)
    .get('/api',ApiRecord.getList)
module.exports = router;    