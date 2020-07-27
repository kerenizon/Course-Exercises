(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let num1 = readlineSync.questionInt("Enter a number:\n");
    let num2 = readlineSync.questionInt("Enter a second number:\n");
    //let num1 = Number.parseInt(input.question("Enter a number:\n"));
    //let num2 = Number.parseInt(input.question("Enter a second number:\n"));

    if (num1+num2 === 10){
        console.log('makes 10');
    } else {
        console.log('nope');
    }

})()