"use strict";

const prompt = require("prompt-sync")({sigint:true});
const n = prompt("Enter Number: ");
// var factorial = 1;

// for(var i=1;i<=n;i++){
//     factorial*=i;
// }
// console.log(factorial);




/// Recursive Factorial

function factorial(n){
    if(n==0)
        return 1;
    else {
        return n*factorial(n-1);
    }    
}
console.log(factorial(n));