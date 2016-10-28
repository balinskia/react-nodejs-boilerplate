const path = require('path');
const express = require('express');
const cors = require('cors');

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '../client/public/index.html');
    const publicPath = express.static(path.join(__dirname, '../client/public'));
    app.use('/public', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.use(cors());

    return app
  }
}
