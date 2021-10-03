// import { data } from "./data.json"
import { age } from "./data.json"

// tree-shaking
console.log(age)
console.log("main")

function main() 
{
    console.log("main");
}

exports.main = main