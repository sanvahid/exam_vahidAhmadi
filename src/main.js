"use strict";

let num = +prompt('enter a num');


function firstFactorial(num) {

  let factorialNum = 1;

  let i = 1;

  for (; i <= num; ) {

      factorialNum = factorialNum * i;
      i++;
  }

  console.log(factorialNum);
 
}


firstFactorial(num);