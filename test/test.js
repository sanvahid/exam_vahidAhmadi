const chai = require('chai');

let assert = chai.assert;
let expect = chai.expect;

describe('Checking sumTwoNum', function() {

    it('test sumTwoNum', function() {
      assert.equal(sumTwoNum(0.3, 0.4), 0.7);
    });

  });
  

  describe('Checking random float', function() {

    it('test random float', function() {
      expect(random(1, 2)).to.be.within(1,2); 
    });
  });

  describe('Checking random integer', function() {

    it('test random integer', function() {
      expect(randomInt(1, 5)).to.be.within(1,5); 
    });
  });

  describe('Checking spam', function() {

    it('test spam', function() {
      assert.equal(checkSpam('free viagrA'), true);
    });
  });

  describe('Checking extract currency value', function() {

    it('test extractCurrencyValue', function() {
      assert.equal(extractCurrencyValue('$120'), '120');
    });
  });





/////////////////////////////////////////functions////////////////////////////////////

  function sumTwoNum(num1, num2) {

    // let num1 = +prompt("enter num1");
    // let num2 = +prompt("enter num2");
  
    let result = floatFixed(num1 + num2);
    return (result);
  
  }
  
  function floatFixed(num) {
    if (parseInt(num) === num) {
      return num;
    } else {
      return +num.toFixed(2);
    }
  }

  function random(min, max) {
  
   return (Math.random() * (max-1) + min);
  }

  function randomInt(min, max) {
  
    return (Math.floor(Math.random() * (max-1) + min));
   }


function checkSpam(msg) {

  msg = msg.toLowerCase();

  if (msg.includes("xxx") || msg.includes("viagra")){
    return true;
  }else return false;
}


function extractCurrencyValue(price) {

  if (price.startsWith('$')) {

    return (price.substr(1));

  }else if (price.endsWith('$')) {
    return (parseInt(price));
  }else return (price);
}