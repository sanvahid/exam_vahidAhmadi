const chai = require('chai');

let assert = chai.assert;
let expect = chai.expect;

describe('Checking calculator', function() {

  let calculator = new Calculator;

    it('test read', function() {
      assert.equal(calculator.read(5), 5);
    });

    it('test sum', function() {
      assert.equal(calculator.sum(5), 10);
    });

    it('test mul', function() {
      assert.equal(calculator.mul(5), 50);
    });
  });
  

  describe('Checking accumulator', function() {

    let accumulator = new Accumulator;

    it('test read', function() {
      assert.equal(accumulator.read(5), 5);
    });

    it('test read', function() {
      accumulator.read(5);
      
      assert.equal(accumulator.value(), 10);
    });
  });



  function Accumulator() { // Accumulator should get a number for initializing
  
    this.num = 0;

    this.read = function(num) {
      this.num += num;  // doesn't need to return 
    };

    this.value = function() {
        return this.num;
      };
  };



  function Calculator(){
  
    this.read = function(num) {
      return this.num = num;
    };
  
    this.sum = function(num) {
      return this.num += num;
    };

    this.mul = function(num) {
        return this.num *= num;
      };
  };
