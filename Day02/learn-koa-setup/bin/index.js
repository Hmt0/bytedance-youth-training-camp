#!/usr/bin/env node
// sheBang

import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js"
import { createPackageJsonTemplate } from "./packageJsonTemplate.js"
import { question } from './question/index.js'
import { createConfig } from './config.js'
import execa from 'execa'
import path from 'path'

const answer = await question()
// console.log("answer", answer)

const config = createConfig(answer)
console.log(config)

// 1.创建文件夹（项目名）

fs.mkdirSync(getRootPath());

// 2.创建 index.js

fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(config));

// 3.创建 package.json

fs.writeFileSync(getRootPath() + "/package.json", createPackageJsonTemplate(config));

// 4.安装依赖

execa("npm install", {
    cwd: getRootPath(),
    stdio: [2, 2, 2]
    // 当前子进程继承父进程的输入输出
})

function getRootPath() {
    // return "./demo"
    return path.resolve(process.cwd(), config.packageName)
}