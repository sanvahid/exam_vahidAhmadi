const chai = require('chai');

let assert = chai.assert;
let expect = chai.expect;

describe('Checking longest Word', function() {

    it('test longestWord', function() {
      assert.equal(longestWord('vahid ahmadi ahmad5'), 'ahmadi');
    });
  });

  describe('Checking Factorial', function() {

    it('test firstFactorial', function() {
      assert.equal(firstFactorial(4), 24);
    });
  });

  
/////////////////////////////////////////functions////////////////////////////////////

function longestWord(string) {

  let str = string.split(" ");
  let longest = 0;
  let word;

  for (let i = 0; i < str.length - 1; i++) {

      if (longest < str[i].length) {

          longest = str[i].length;

          word = str[i];
      }
  }
  return(word);
}
  
function firstFactorial(num) {

  let factorialNum = 1;

  let i = 1;

  for (; i <= num; ) {

      factorialNum = factorialNum * i;
      i++;
  }

  return factorialNum;
 
}