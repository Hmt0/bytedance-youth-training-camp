import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js"
import { createPackageJsonTemplate } from "./packageJsonTemplate.js"
import { question } from './question/index.js'
import { createConfig } from './config.js'

const answer = await question()
// console.log("answer", answer)

const config = createConfig(answer)

// 1.创建文件夹（项目名）

fs.mkdirSync(getRootPath());

// 2.创建 index.js

fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(config));

// 3.创建 package.json

fs.writeFileSync(getRootPath() + "/package.json", createPackageJsonTemplate(config));

// 4.安装依赖


function getRootPath() {
    return "./demo"
}