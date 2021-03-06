/**
 * Created by bo on 9/27/16.
 */
'use strict';

var expect = require("chai").expect;

describe('Array', function(){
    describe('Verify the #indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            expect([1,2,3].indexOf(0)).to.be.equal(-1);
            expect([1,2,3].indexOf(5)).to.be.equal(-1);
            expect([1,2,3].indexOf(3)).to.be.equal(2);
        })
    })
});     