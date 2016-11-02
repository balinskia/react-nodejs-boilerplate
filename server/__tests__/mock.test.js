/**
 * Created by Bartlomiej Rutkowski on 02.11.16.
 */
var should = require('should');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            should.equal(-1, [1,2,3].indexOf(4));
        });
    });
});