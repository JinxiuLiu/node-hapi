
const Joi = require('joi');
const models = require('../models');

const GROUP_NAME = 'goods';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{goodId}`,
        handler: async (request, reply) => {
            const results = await models.goods.findOne({
                where: { id: request.params.goodId }
            });
            reply(results);
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取商品信息',
            validate: {
                params: {
                    goodId: Joi.string().required()
                }
            },
            auth: false
        }
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/views`,
        handler: async (request, reply) => {
            await models.goods.update(
                { views: models.Sequelize.literal('`views` + 1') }, 
                { where: { id: request.payload.goodId } }
            );
            const {dataValues: results} = await models.goods.findOne({
                where: { id: request.payload.goodId }
            });
            reply(results.views);
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取商品信息',
            validate: {
                payload: {
                    goodId: Joi.string().required()
                }
            },
            auth: false
        }
    }
]