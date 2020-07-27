(function () {
    'use strict';

    const input = require('readline-sync');
    let num = input.questionInt("Enter a number:\n");
    let arr = new Array(num);
    for(let i = 0; i < arr.length; i+= 1){
        arr[i] = Math.floor(Math.random() * 50) + 1;;
    }
    console.log(`The array: ${arr}\n`);

    //find the Min and Max by sorting the array and return arr[0] and arr[end]
    arr.sort( function (a, b){return a - b;} );

    console.log(`min is ${arr[0]}\n`);
    console.log(`max is ${arr[arr.length-1]}\n`);
})()