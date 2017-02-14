/**
 * Created by Bartlomiej Rutkowski on 23.10.16.
 */
const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/react-nodejs-boilerplate',
    port: process.env.PORT || 8000
};

module.exports = {
    config
};
