const Server = require('./server.js');
const config = require('./config').config;

const app = Server.app;

if (process.env.NODE_ENV !== 'production') {
    console.log('Building dev'); // eslint-disable-line
    const webpack = require('webpack'); // eslint-disable-line
    const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
    const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
    const config = require('../webpack.dev.config.js'); // eslint-disable-line
    const compiler = webpack(config);

    app.use(webpackHotMiddleware(compiler));
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
}

app.listen(config.port, (error) => {
    if (!error) {
      console.log(`Listening at http://localhost:${config.port}`); // eslint-disable-line
    }
});