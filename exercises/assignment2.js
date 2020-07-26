(function () {
    'use strict';

    //the suits
    let map1 = new Map( [[0,('\u2665')],[1,('\u2660')],[2,('\u2666')],[3,('\u2663')]] );

    console.log('<<<<<<<<<------------- Welcome To WAR ------------->>>>>>>>>>');
    const input = require('readline-sync');
    let name = input.question("Please enter your name:\n");
    console.log(`Hello ${name} You currently have 50 dollars`);
    let round = 0, bet, userCash = 50, userCard, pcCard, userSuit, pcSuit, quit;
    do {
        bet = input.questionInt(`Place your bet for the next round: 1 to ${userCash}\n`);
        if ((bet < 0) || (bet > userCash)){
            console.log(`I said between 1 to ${userCash} and you typed ${bet}\n`);
            console.log("I don't play with liars!!! Bye\n");
            return;
        }
        userCard = Math.floor(Math.random() * 12) + 1;
        pcCard = Math.floor(Math.random() * 12) + 1;
        userSuit = map1.get(Math.floor(Math.random() * 4));
        pcSuit = map1.get(Math.floor(Math.random() * 4));
        console.log(`Your card is ${userCard} ${userSuit} and my card is ${pcCard} ${pcSuit}`);
        if (userCard >= pcCard){
            userCash += bet;
            console.log(`You won ${bet}!! and now you have ${userCash}`);
            let options = ['Play another round', 'leave with my money :-)'];
            let index = input.keyInSelect(options,'What would you like to do?');
            if(index === 0){
                round = 1;
            } else { // index = 1
                console.log('Bye Bye');
                return;
            }

        } else {
            userCash -= bet;
            if (userCash < 0){
                userCash = 0; 
            }
            console.log(`You lost ${bet} and now you have ${userCash}`);
            if (userCash === 0){
                quit = input.keyInYNStrict("You are broke...do you want another round?:\n")
                if(quit){
                    userCash = 50;
                    continue;
                } else {
                    console.log('Bye Bye');
                    return;
                }
            }

        }

    } while (round > 0);

})()