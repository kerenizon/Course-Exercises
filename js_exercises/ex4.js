(function () {
    'use strict';

    const input = require('readline-sync');
    let num = input.question("How many people are you going with?\n");
    let parsed = parseInt(num);
    try{
        if (isNaN(parsed)){
            console.log('The input you entered is not a number');
            throw "stop execution";
        } 
    } catch(err){
        console.log('stopping execution');
        return;
    }

    let Lemehadrin, Kosher = input.keyInYNStrict("Should it be Kosher?\n");
    if(Kosher){
        Lemehadrin = input.keyInYNStrict("Should it be Kashrut Lemehadrin?\n");
    }

    let food = ['Coffee Shop', 'Dairy', 'Fish', 'Hummus', 'Meat', 'Falafel', 'Pizza'];
    let index = input.keyInSelect(food,'What kind of food do you want?');

    let restaurantName = '';

    if(Kosher){
        if(Lemehadrin){
            switch(index){
                case 0:
                    restaurantName = 'Cafe Cafe';
                    break;
                case 1:
                    restaurantName = 'Cafe Cafe';
                    break;
                case 2:
                    restaurantName = 'Deca';
                    break;
                case 3:
                    restaurantName = 'Kiki';
                    break;
                case 4:
                    restaurantName = 'Lechem Basar';
                    break;
                case 5:
                    restaurantName = 'Kiki';
                    break;
                case 6:
                    restaurantName = 'Dudalapizza';
                    break;
            }
        } else{
            switch(index){
                case 0:
                    restaurantName = 'Biga';
                    break;
                case 1:
                    restaurantName = 'Greg Cafe';
                    break;
                case 2:
                    restaurantName = 'Alter Nativ';
                    break;
                case 3:
                    restaurantName = 'Ful Dani';
                    break;
                case 4:
                    restaurantName = 'Hilulim';
                    break;
                case 5:
                    restaurantName = 'Ministore Falafel';
                    break;
                case 6:
                    restaurantName = 'Pizza Agvania';
                    break;
            }
        }
    } else{
        switch(index){
            case 0:
                restaurantName = 'Nahat Cafe';
                break;
            case 1:
                restaurantName = 'Pankina';
                break;
            case 2:
                restaurantName = 'Shila';
                break;
            case 3:
                restaurantName = 'Caspi';
                break;
            case 4:
                restaurantName = 'Hatraklin Meat & Wine Bistro';
                break;
            case 5:
                restaurantName = 'HaKosem';
                break;
            case 6:
                restaurantName = 'Bezzo Pizza‬';
                break;
        }
    }

    console.log(`I recommend you visit "${restaurantName}" Restaurant`);

})()