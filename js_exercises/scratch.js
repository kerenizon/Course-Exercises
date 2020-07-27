(function () {
    'use strict';

    const input = require('readline-sync');
    let num1 = Number.parseFloat(input.question("Enter a number:\n"));
    let num2 = Number.parseFloat(input.question("Enter a second number:\n"));

    if (num1+num2 === 10){
        console.log('makes 10');
    } else {
        console.log('nope');
    }

})()