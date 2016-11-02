const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config').config;

mongoose.connect(config.mongoURL, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});

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
