import Router from 'koa-router';
import validator from 'validator';
import {
    isEmpty
} from 'lodash'
import UserInfoModel from '@mo/models/userInfo';
import jwt from 'jsonwebtoken';
import Config from '@/config/jwtsecret'

const router = new Router({
    prefix: '/api/v1'
})

const ValidatorInput = (data) => {
    let errors = {}
    if (validator.isEmpty(data.userName)) {
        errors.userName = '请填写用户名'
    }

    if (validator.isEmpty(data.email)) {
        errors.email = '请填写邮箱'
    }

    if (validator.isEmpty(data.password) || validator.isEmpty(data.confrimPassword || '')) {
        errors.confrimPassword = '请填写密码'
    }

    if (!(validator.equals(data.password, data.confrimPassword))) {
        errors.confrimPassword = '两次密码不同'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}


router.post('/registry', async (ctx) => {
    let req = ctx.request.body;
    const {
        errors,
        isValid
    } = ValidatorInput(req)
    if (!isValid) {
        ctx.body = global.res.format(errors, 400, '缺少参数')
    } else {
        let data = await UserInfoModel.getUserEmail(req.email);
        if (data.dataValues.email == req.email) {
            ctx.body = global.res.format({}, 400, '邮箱已注册')
        } else {
            await UserInfoModel.register(req);
            ctx.body = global.res.format({}, 200, '注册成功')
            ctx.status = 200
        }
    }
})

router.get('/registry/:email', async (ctx) => {
    let {
        email
    } = ctx.params
    let data = await UserInfoModel.getUserEmail(email);
    ctx.body = global.res.format(data.dataValues, 200, '查询成功')
    ctx.status = 200
})

router.post('/login', async (ctx) => {
    let req = ctx.request.body;
    let data = await UserInfoModel.getUserEmail(req.email);
    if (!data) {
        ctx.body = global.res.format({}, 400, '该邮箱未注册')
        ctx.status = 200;
        return false;
    }
    let values = data.dataValues;
    if (
        values.email == req.email &&
        values.password == req.password
    ) {
        const token = jwt.sign({
            id: values.id,
            email: values.email
        }, Config.jwtSecret)
        ctx.body = global.res.format({
            token,
            ...values
        }, 200, '登陆成功')
        ctx.status = 200
    } else if (values.password !== req.password) {
        ctx.body = global.res.format({}, 400, '密码错误')
    } else {
        ctx.body = global.res.format({}, 400, '参数错误')
    }
})
module.exports = router;
