const Hapi = require('@hapi/hapi');
const config = require('./config.json')

const init = async () => {
  
  const server = Hapi.server({
    port: config.port,
    host: config.host
  });

  server.route({
    path: '/',
    method: 'GET',
    handler: (req, h) => {
      return h.request('Hello from HapiJS')
    }
  });

}