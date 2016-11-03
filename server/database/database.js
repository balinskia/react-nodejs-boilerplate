/**
 * Created by Bartlomiej Rutkowski on 03.11.16.
 */
const config = require('../config').config;
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const loadModels = (callback) => {
    const models = path.join(__dirname, 'models');
    const files = fs.readdirSync(models);
    files.forEach(file => {
        const modelPath = path.join(models, file);
        require(modelPath); // eslint-disable-line global-require
    });
    callback();
};

const connect = callback => {
    mongoose.connect(config.mongoURL, (error) => {
        if (error) {
            console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
            throw error;
        }
        loadModels(callback);
    });
};

module.exports = {
    connect
};
