"use strict";

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


  let calculator = new Calculator;

 
  function Accumulator(){
  
    this.num = 0;

    this.read = function(num) {
      return this.num += num;
    };

    this.value = function() {
        return this.num;
      };
  };

  let accumulator = new Accumulator;
  console.log(accumulator.read(5));
  console.log(accumulator.read(1));
  console.log(accumulator.read(1));

  console.log(accumulator.value());

