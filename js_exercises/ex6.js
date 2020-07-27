(function () {
    'use strict';

    const input = require('readline-sync');
    let num, word = 'larger', count = 0;
    do {
        if (count >= 1){
            word = word.toUpperCase();
        }
        num = Number.parseInt(input.question(`please choose a number ${word} than 10:\n`));
        count += 1;

        if (num > 10){
            console.log('thank you');
            break;
        }
    } while (num <= 10);
    
    

})()