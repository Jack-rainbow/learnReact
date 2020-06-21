
import Router from 'koa-router';
import validator  from 'validator';
import {isEmpty} from 'lodash'
import UserInfoModel from '@mo/models/userInfo';

const router = new Router({
    prefix: '/api/v1'
})

const ValidatorInput = (data)=> {
    let errors = {}
    if(validator.isEmpty(data.userName)) {
        errors.userName = '请填写用户名'
    }

    if(validator.isEmpty(data.email)) {
        errors.email = '请填写邮箱'
    }

    if(validator.isEmpty(data.password)|| validator.isEmpty(data.confrimPassword || ''))  {
        errors.confrimPassword = '请填写密码'
    }

    if(validator.equals(data.password, data.confrimPassword)) {
        errors.confrimPassword = '两次密码不同'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}


router.post('/registry', async (ctx) => {
    let req = ctx.request.body;
    const { errors, isValid } = ValidatorInput(req)
    if(!isValid) {
        ctx.body = global.res.format(errors, 400, '缺少参数')
    }
    // await UserInfoModel.register(req);
  
    // await UserInfoModel.register(req);
    // ctx.body = 
    // ctx.status = 200
})

module.exports = router;
