(function () {
    'use strict';

    const input = require('readline-sync');
    let name = input.question("What is your name?\n");

    console.log(`Hello ${name}!`);

})()