const chai = require('chai');

let assert = chai.assert;
let expect = chai.expect;

describe('Checking session projects 8', function() {

    it('sum object propertie', function() {
      assert.equal(
       sumObjProp (salaries = {
        john : 200,
        ann : 160,
        pete : 130,
        name: 'John'
    }), 490);
    });

    it('multiply numeric prop by 2', function() {
      expect(multiplyNumeric({
        width : 200,
        height : 350,
        title : 'my menu'
      })).to.deep.equal({
        width : 400,
        height : 700,
        title : 'my menu'
      });
    });

    
  });


function sumObjProp (obj) {

  let sum = 0;

  for (let prop in obj) {

      sum = sum + obj[prop];
  }

  return sum;
}



function multiplyNumeric (obj) {

  for (let prop in obj) {

      if (typeof obj[prop] === 'string') {
          
          continue;
      }

      obj[prop] = 2 * obj[prop];
  }

  return obj;
}