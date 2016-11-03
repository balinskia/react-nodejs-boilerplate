/**
 * Created by Bartlomiej Rutkowski on 03.11.16.
 */
const createRandomString = (length = 8) => {
    return Math.random().toString(36).substring(length);
};

const createRandomInteger = (MIN = -1000000, MAX = 1000000) => {
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};

const createRandomDouble = (MIN = -1000000, MAX = 1000000) => {
    return Math.random() * (MAX - MIN) + MIN;
};

module.exports = {
    createRandomString,
    createRandomInteger,
    createRandomDouble
};
