(function () {
    'use strict';

    const input = require('readline-sync');
    let num, factorial = 1;
    
    do {
        num = input.questionInt("Enter a positive number:\n");
        for(let x=1; x <= num; x+=1){
            factorial *= x;
        }

        if(num <= 0){
            console.log('The number you entered is not positive');
        }else{
            console.log(`The factorial of ${num} is: ${factorial}`);
        }
    } while (num <= 0)
    
})()