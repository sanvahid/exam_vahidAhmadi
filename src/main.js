"use strict";

/*
/////////////////////////sum of two number////////////////

function sumTwoNum() {

  let num1 = +prompt("enter num1");
  let num2 = +prompt("enter num2");

  let result = floatFixed(num1 + num2);
  alert(result);

}

sumTwoNum();
*/


////////////////////////repeat until the input is a number//////////////////
/*
function readNumber() {

  let num = 0;
  let i = 1;
  let result = null;

  while(!num) {
    let num = prompt(`Enter number ${i}`);
    
    if (isNaN(Number(num)) || num == null || num == "") {
      alert (`The result of your numbers is ${result}`);
      break;
    };

    result = floatFixed(result + Number(num));

    i++;
  }
}

readNumber();
*/


////////////////////random float///////////////
/*
function random(min, max) {

  let result;

 alert(Math.random() * (max-1) + min);
} 

random(1,5);
*/

function floatFixed(num) {
  if (parseInt(num) === num) {
    return num;
  } else {
    return +num.toFixed(2);
  }
}


///////////////////////////////check for spam////////////////////////////
/*
console.log(checkSpam('xx VIAgr'));

function checkSpam(msg) {

  msg = msg.toLowerCase();

  if (msg.includes("xxx") || msg.includes("viagra")){
    return true;
  }else return false;
}
*/

//////////////////////////////////////////truncate////////////////////////////
/*
function truncate(msg, numOfChar) {

  let lengthMsg = msg.length;

  if (lengthMsg > numOfChar) {
    console.log(msg.slice(0, numOfChar) + "...");
  }else console.log(msg);
}

truncate("jvjvjh hkh jhvj jhvj jh jhvjhv jh jvjhchgcjg  hjhv jvjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj ", 10);
*/

///////////////////////////////////////////////extract the money////////////////////////////////

extractCurrencyValue('120$');

function extractCurrencyValue(price) {

  if (price.startsWith('$')) {

    alert (price.substr(1));

  }else if (price.endsWith('$')) {
    alert (parseInt(price));
  }else alert (price);
}