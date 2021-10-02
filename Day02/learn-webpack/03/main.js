import { foo } from './foo'
import "./style.css"

const div = document.createElement("div")

div.classList.add("red")
div.innerText = "color" 


document.body.append(div)

console.log("main")

console.log(foo())