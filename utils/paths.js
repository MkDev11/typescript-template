const path = require("path");
const root = path.resolve(process.cwd());

module.exports = {
  root: `${root}`,
  assets: `${root}/assets`,
  client: `${root}/client`,
  config: `${root}/config`,
  logs: `${root}/logs`,
  public: `${root}/public`,
  server: `${root}/server`,
  storage: `${root}/storage`,
  utils: `${root}/utils`,
  build: `${root}/build`,
  js: `js`,
  css: `css`,
};
