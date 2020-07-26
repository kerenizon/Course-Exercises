(function () {
    'use strict';

    const input = require('readline-sync');

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('                 Hello! Welcome to the COVID-19 quiz!               ');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(' First Question');
    console.log('________________');

    let Q1 = ["Yes, I was", "No, I wasn't", "I didn't get out of home", "I don't know"];
    let index1 = input.keyInSelect(Q1,'Were you in close contact with person confirmed to have COVID-19?');

    console.log(' Second Question');
    console.log('________________');

    let Q2 = ["No, I don't", "Unfortunately, yes", "I didn't measure", "Maybe"];
    let index2 = input.keyInSelect(Q2,'Do you have a fever?');

    console.log(' Third Question');
    console.log('________________');

    let Q3 = ["A little", "No, I'm strong like a bull", "Yes, I'm so exhausted", "No, I'm fine"];
    let index3 = input.keyInSelect(Q3,'Do you feel extreme fatigue or aching muscles?');

    console.log(' Fourth Question');
    console.log('________________');

    let Q4 = ["Not at all", "A little", "I usually have a cough", "Yes, and it's troublesome cough"];
    let index4 = input.keyInSelect(Q4,'Do you experience a new continuous cough?');

    console.log(' Fifth Question');
    console.log('________________');

    let Q5 = ["NO", "I have runny nose", "I have sore throat", "Yes"];
    let index5 = input.keyInSelect(Q5,'Do you feel a loss or change to your sense of smell or taste?');

    let map1 = new Map( [[0,10],[1,1],[2,1],[3,2]] );
    let map2 = new Map( [[0,1],[1,10],[2,2],[3,2]] );
    let map3 = new Map( [[0,2],[1,1],[2,10],[3,1]] );
    let map4 = new Map( [[0,1],[1,4],[2,5],[3,10]] );
    let map5 = new Map( [[0,1],[1,5],[2,5],[3,10]] );
    let sum = map1.get(index1) + map2.get(index2) + map3.get(index3) + map4.get(index4) + map5.get(index5);

    
    console.log('============== Quiz results ==============');
    if (sum < 5){
        console.log("You seem to be fine. keep taking care of yourself!");
    } else if ((sum >= 5) && (sum < 10)){
        console.log("You seem to be fine, but if there are new symptoms you should get a test");
    } else if ((sum >10) && (sum < 30)){
        console.log("You should stay at home (self-isolate) and get a test to check if you have coronavirus as soon as possible");
    } else {   // >=30
        console.log("you MUST stay at home (self-isolate) and get a test RIGHT NOW");
    }
})()