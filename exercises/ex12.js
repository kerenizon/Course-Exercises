(function () {
    'use strict';

    const input = require('readline-sync');
    let str = input.question("Enter a string:\n");

    let strArr = str.split('');
    
    for(let i = 0; i< strArr.length; i+= 1){
        switch(strArr[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                strArr[i] = strArr[i].toUpperCase();
                break;
        }
    }
    strArr = strArr.join('');

    console.log(strArr);

})()