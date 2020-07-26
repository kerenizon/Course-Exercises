//(function () {
//    'use strict';

//    function joinArrays(arr1,arr2){
//        return arr1 + ',' + arr2;
//    }

//    let arr1 = ["Hello"];
//    let arr2 = ["AppleSeeds", "Bootcamp"];

//    console.log(`The first array: ${arr1}\n`);
//    console.log(`The second array: ${arr2}\n`);
//    console.log(`Joining of the two arrays: ${joinArrays(arr1,arr2)}`);
//})()

//  function joinArrays(arr1,arr2){
//    'use strict';
//    let arr = arr1 + ',' + arr2;
//   return arr;
//  }

function joinArrays(arr1,arr2){
    'use strict';
    return arr1.concat(arr2);
}
