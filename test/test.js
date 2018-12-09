const chai = require('chai');

let assert = chai.assert;
let expect = chai.expect;

describe('Checking calculator', function() {
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

  describe('Checking ladder', function() {
    it('test chaining', function() {
      assert.equal(ladder.up().up().up().down().showStep(),2 );
    });
  });

  let ladder = {
    step : 0,

    up() {
        this.step++;

        return this;
    },

    down() {
        this.step--;

        return this;
    },

    showStep() {
        return (this.step);
    }
 }; 
  
  
  let calculator = {
    number : 0,
  
    read(num) {
      return this.number = num;
    },
  
    sum(num) {
        return this.number = this.number + num;
    },

    mul(num) {
        return this.number = this.number * num;
    }
  }
