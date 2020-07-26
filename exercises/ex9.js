(function () {
    'use strict';

    const input = require('readline-sync');
    let number = input.questionInt("Enter a number:\n");

    function isPrime(num){
        for(let k = 2; k < num; k+= 1){
            if(num % k === 0){
                return false;
            }
        }
        return true;
    }

    console.log(`The prime numbers between 1-${number} are:`);

    for(let x = 2; x <= number; x+= 1){
        if(isPrime(x)){
            console.log(x);
        }
    }

})()