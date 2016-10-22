import app from './server/server';
const port = (process.env.PORT || 8080);


if (process.env.NODE_ENV !== 'production') {
  console.log('Building dev');
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.listen(port, (error) => {
  if (!error) {
    console.log(`Listening at http://localhost:${port}`); // eslint-disable-line
  }
});

