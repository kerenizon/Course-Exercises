(function () {
    'use strict';

    const input = require('readline-sync');
    let str = input.question("Enter a string:\n");

    let strArr = str.split(' ');
    let maxLength = 0;
    let maxWord = [], pattern = /[A-Z]/i;
    for(let i=0; i < strArr.length; i+=1){
        let strCharArr = strArr[i].split('');
        let word = [], count = 0;
        for (let j=0; j < strCharArr.length; j+=1){
            //checking whether the current char is number or symbol or letter according ASCII Table
            //if((strCharArr[j] >= 'A' && strCharArr[j] <= 'Z') || (strCharArr[j] >= 'a' && strCharArr[j] <= 'z')){
            if((strCharArr[j].match(pattern))){
                count += 1;
                word+= strCharArr[j];
            }
        }
        if (count > maxLength){
            maxLength = count;
            maxWord = word;
        }
    }
    console.log(`The longest word in the string is: ${maxWord}`);

})()