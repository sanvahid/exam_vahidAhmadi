const chai = require('chai');

let assert = chai.assert;

describe('Checking longest Word', function () {
  it('test longestWord', function () {
    assert.equal(longestWord('vahid ahmadi ahmad5'), 'ahmadi');
  });

  it('returns !', () => {
    assert.strictEqual(longestWord('!'), '!');
  });

  it('returns helloooooo', () => {
    assert.strictEqual(longestWord('This is a helloooooo'), 'helloooooo');
  });
});

describe('Checking Factorial', function () {
  it('test firstFactorial', function () {
    assert.equal(firstFactorial(4), 24);
  });

  it('returns 5!', () => {
    assert.strictEqual(firstFactorial(5), 120);
  });

  it('returns 1', () => {
    assert.strictEqual(firstFactorial(0), 1);
  });
});

/// //////////////////////////////////////functions////////////////////////////////////
function longestWord (string) {
  let str = string.split(' ');
  let longest = 0;
  let word;

  for (let i = 0; i < str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;

      word = str[i];
    }
  }
  return (word);
}

function firstFactorial (num) {
  let factorialNum = 1;

  let i = 1;

  for (; i <= num;) {
    factorialNum = factorialNum * i;
    i++;
  }

  return factorialNum;
}
