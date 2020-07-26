(function () {
    'use strict';

    const input = require('readline-sync');
    let str = input.question("Enter a string:\n");

    function isPalindrome(str2check){
        let strArr = str2check.split('');
        for(let i=0; i <= Math.floor(str2check.length / 2) ; i+= 1){
            if(strArr[i] !== strArr[str2check.length-1-i]){
                return false;
            }       
        }
        return true;
    }

    (isPalindrome(str)) ? console.log('The input you entered is palindrome') : console.log('The input you entered is not palindrome');


})()