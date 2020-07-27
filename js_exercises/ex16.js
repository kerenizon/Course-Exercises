(function () {
    'use strict';

    function indexOfMinMax(arr){
        let min = Math.min(...arr);
        let max = Math.max(...arr);

        let indexArr = [arr.indexOf(min),arr.indexOf(max)];
        return indexArr;
    }

    let randArr = new Array(10);    
    for (let i=0; i< 10; i+= 1){
        randArr[i] = Math.random() * 50;
        console.log(randArr[i]);
    }

    console.log(`index of min value of the array: ${indexOfMinMax(randArr)[0]}\n`);
    console.log(`index of max value of the array: ${indexOfMinMax(randArr)[1]}\n`);
})()