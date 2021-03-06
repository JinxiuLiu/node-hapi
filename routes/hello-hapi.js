// routes/hello-hapi.js

const { jwtHeaderDefine } = require('../utils/router-helper');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply(request.auth.credentials);
        },
        config: {
            tags: ['api', 'tests'],
            description: '测试hello-hapi',
            validate: {
                ...jwtHeaderDefine
            }
        }
    }
]