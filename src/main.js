"use strict";
/*
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

  calculator.read(5);

 console.log( calculator.sum(5));
 console.log( calculator.sum(5));
 console.log( calculator.mul(5));
 console.log( calculator.read(5));
 console.log( calculator.mul(5));

 */

 let ladder = {

    step : 0,

    up() {
        this.step = this.step + 1;
        return this;
    },

    down() {
        this.step = this.step - 1;
        return this;
    },

    showStep() {
        alert (this.step);
    }

 }

ladder.up().down().showStep();