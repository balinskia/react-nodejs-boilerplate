import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import database from './database/database';

const app = express();
database.connect(() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    // static paths
    const publicPath = express.static(path.join(__dirname, '../client/public'));
    app.use(publicPath);
});

module.exports = {
    app
};
