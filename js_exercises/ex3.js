(function () {
    'use strict';

    const input = require('readline-sync');
    let num = input.questionInt("Enter a number between 0-9:\n");
    
    let mapObj = {
        0: 'ZERO',
        1: 'ONE',
        2: 'TWO',
        3: 'THREE',
        4: 'FOUR',
        5: 'FIVE',
        6: 'SIX',
        7: 'SEVEN',
        8: 'EIGHT',
        9: 'NINE'
    };

    let numArr = [num];
    let mappedArray = Array.from(numArr, function(item) {return this[item]; } , mapObj);

    console.log(...mappedArray);

})()