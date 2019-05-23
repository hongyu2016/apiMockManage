/**
 * 前端api的路由
 */

import { ApiRecord } from '../controllers/frontend.export'

const router = require('koa-router')();
router.prefix('/api'); //路由前缀

router
    .get('/list',ApiRecord.apiReturn)


module.exports = router;
