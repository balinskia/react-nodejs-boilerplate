const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const indexPath = path.join(__dirname, '../client/public/index.html');
const publicPath = express.static(path.join(__dirname, '../client/public'));
app.use('/public', publicPath);
app.get('/', (_, res) => {
    res.sendFile(indexPath);
});
app.use(cors());

module.exports = {
    app
};
