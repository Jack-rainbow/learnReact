
import Router from 'koa-router';
import UserInfoModel from '@mo/models/userInfo';
const router = new Router({
    prefix: '/api/v1'
})

router.post('/registry', async (ctx) => {
    let req = ctx.request.body;
    await UserInfoModel.register(req);
    ctx.body = global.res.format({}, 200, '注册成功')
    ctx.status = 200
})

module.exports = router;
