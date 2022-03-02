"use strict";

const prompt = require("prompt-sync")({sigint:true});



function isLeap(y){
    if((y%4==0 && (y%100!=0))|| (y%400==0)){
        console.log(y+' is a Leap Year');
    } else {
        console.log(y+' is not a Leap Year')
    }
}


var year = prompt("Enter Year: ");
isLeap(year);