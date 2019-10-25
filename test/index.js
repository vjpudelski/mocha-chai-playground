import chai from 'chai';
import {sum, diff} from '../src/index.js';

describe('#index tests', () => {
    it('adds 1 + 2 to equal 3', () => {
        chai.expect(sum(1, 2)).to.equal(3);
    })
    it('subtract 7 - 3 to equal 4', () => {
        chai.expect(diff(7, 3)).to.equal(4);
    })
});
