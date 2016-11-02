/**
 * Created by Bartlomiej Rutkowski on 03.11.16.
 */
const createRandomString = (length = 8) => {
    return Math.random().toString(36).substring(length);
};

const createRandomInteger = () => {
    const MAX = Number.POSITIVE_INFINITY;
    const MIN = Number.NEGATIVE_INFINITY;
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};

const createRandomDouble = () => {
    const MAX = Number.POSITIVE_INFINITY;
    const MIN = Number.NEGATIVE_INFINITY;
    return Math.random() * (MAX - MIN) + MIN;
}

module.exports = {
    createRandomString,
    createRandomInteger,
    createRandomDouble
};