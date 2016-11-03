const path = require('path');
const express = require('express');
const cors = require('cors');
const database = require('./database/database');
const bodyParser = require('body-parser');

const app = express();
database.connect(() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    const indexPath = path.join(__dirname, '../client/public/index.html');
    const publicPath = express.static(path.join(__dirname, '../client/public'));
    app.use('/public', publicPath);
    app.get('/', (_, res) => {
        res.sendFile(indexPath);
    });
});

module.exports = {
    app
};
