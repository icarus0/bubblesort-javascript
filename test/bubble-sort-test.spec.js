var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var module = require('../bubble-sort');

describe('Bubble Sort', function(){

  var evilTest = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  it('should have an evil test...', function(){
    expect(evilTest[0]).to.equal(9);
    expect(evilTest[evilTest.length - 1]).to.equal(1);
  });

});