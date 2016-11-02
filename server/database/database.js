/**
 * Created by Bartlomiej Rutkowski on 03.11.16.
 */
const config = require('../config').config;
const mongoose = require('mongoose');

const connect = function (callback) {
    mongoose.connect(config.mongoURL, (error) => {
        if (error) {
            console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
            throw error;
        }
        callback();
    });
};

module.exports = {
    connect
};
