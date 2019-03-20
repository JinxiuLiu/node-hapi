
const Hapi = require('hapi');
const hapiAuthJWT2 = require('hapi-auth-jwt2')

require('env2')('./.env');
const config = require('./config');
// routes
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const routesUsers = require('./routes/users');
// plugin
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = new Hapi.Server();

server.connection({
    port: config.port,
    host: config.host
})

const init = async () => {
    // 注册插件
    await server.register([
        ...pluginHapiSwagger,
        pluginHapiPagination,
        hapiAuthJWT2
    ]);
    pluginHapiAuthJWT2(server);
    // 路由
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders,
        ...routesUsers
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    console.log(`Swagger running at: ${server.info.uri}/documentation`);
}

init();