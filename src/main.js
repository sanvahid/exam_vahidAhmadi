let _ = require("lodash");

"use strict";

/* first project session 08 */
/*

let user = {};

user.name = "john";

user.username = "smith";

user.name = "pete";

delete user.name;

console.log(user);

*/

// ***************check for empty******************
/*
function isEmpty (obj) {

    for (let prop in obj) {

        if (prop in obj) return false;
    }

    return true;
}


let schedule = {}

alert (isEmpty(schedule));
*/

//**********************sum object propertie*/
/*
function sumObjProp (obj) {

    let sum = 0;

    for (let prop in obj) {

        sum = sum + obj[prop];
    }

    return sum;
}

let salaries = {
    john : 200,
    ann : 160,
    pete : 130
}

console.log(sumObjProp(salaries));
*/

//****************multiply numeric prop by 2 */
/*
let menu = {
    width : 200,
    height : 350,
    title : 'my menu'
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

console.log (multiplyNumeric(menu));
*/
