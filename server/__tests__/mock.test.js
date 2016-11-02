/**
 * Created by Bartlomiej Rutkowski on 02.11.16.
 */
const should = require('should');

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            should.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});
