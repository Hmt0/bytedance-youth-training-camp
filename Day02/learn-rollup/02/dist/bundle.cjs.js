'use strict';

var age = 18;

// import { data } from "./data.json"

// tree-shaking
console.log(age);
console.log("main");

function main() 
{
    console.log("main");
}

exports.main = main;
