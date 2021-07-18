const operatingSystemRouter = require('./operatingsystem');
const siteRouter = require('./site');

function route(app) {
  app.use('/operating-system', operatingSystemRouter);

  app.use('/', siteRouter);
}

module.exports = route;
