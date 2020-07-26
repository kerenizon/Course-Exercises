(function () {
    'use strict';

    const input = require('readline-sync');
    let str = input.question("Enter a string:\n");

    let starStr = str.split(' ').join('*');
    console.log(starStr);

})()