import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js"
import { createPackageJsonTemplate } from "./packageJsonTemplate.js"
import inquirer from 'inquirer'

// 核心：自动化思维
// console.log(inquirer)
const answer = await inquirer.prompt([
    { type: "input", name: "packageName", message: "set package name"},
    { 
        type: "number",
        name: "port",
        message: "set port number",
        default: () => 8080,
    },
    {
        type: "checkbox",
        name: "middleware",
        choices: [
            {
                name: "koaStatic",
            },
            {
                name: "koaRouter"
            }
        ],

    }
]);
console.log("answer", answer)
const inputConfig = {
    packageName: answer.packageName,
    port: 8080,
    middleware: {
        router: true,
        static: true
    },
};

// 1.创建文件夹（项目名）

fs.mkdirSync(getRootPath());

// 2.创建 index.js

fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(inputConfig));

// 3.创建 package.json

fs.writeFileSync(getRootPath() + "/package.json", createPackageJsonTemplate(inputConfig));

// 4.安装依赖


function getRootPath() {
    return "./demo"
}