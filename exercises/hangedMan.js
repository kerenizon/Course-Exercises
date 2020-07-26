(function () {
    'use strict';

    const input = require('readline-sync');

    const figlet = require('figlet');
    console.log(figlet.textSync('HANG  MAN', {
        font: 'Dancing Font',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));

    let wordsArr = ['umbrella', 'coincidence', 'instantiation' , 'surprise', 'country'];
    let word = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    let count = 10, charWord = [], flag = 0;
    for(let i = 0; i< word.length ; i+= 1){
        charWord[i] = '*';
    }
    do{
        flag = 0;
        console.log(`You have ${count} guesses\n`);
        console.log('The word is:\n');
        console.log(`${charWord.join('')}`);
        let guess = input.question("What is your guess?\n");
        if (guess.length === 1){
            if (((guess >= 'A') && (guess <= 'Z')) || ((guess >= 'a') && (guess <= 'z'))){
                for(let j=0; j < word.length; j+= 1){
                    if (word.split('')[j] === guess.toLowerCase() ){
                        charWord[j] = guess.toLowerCase();
                        flag = 1; 
                    }
                }
                if (flag === 0){
                    count-= 1;
                }
                if (charWord.join('') === word){
                    console.log('Wow You are good!!!');
                    break;
                }
            } else {
                console.log('Please enter only letter\n');
            }
        } else {
            console.log('Please enter only one character\n');
        }
    } while(count > 0);

})()