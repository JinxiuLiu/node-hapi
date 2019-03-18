const Joi = require('joi');

const paginationDefine = {
    limit: Joi.number().integer().min(1).default(10).description('每页的条目数').error(new Error('请输入正确的条目数')),
    page: Joi.number().integer().min(1).default(1).description('页码数').error(new Error('请输入正确的页码')),
    pagination: Joi.boolean().description('是否开启分页，默认为true'),
}

const jwtHeaderDefine = {
    headers: Joi.object({
        authorization: Joi.string().required().error(new Error('未登录'))
    }).unknown()
}

module.exports = { paginationDefine, jwtHeaderDefine }