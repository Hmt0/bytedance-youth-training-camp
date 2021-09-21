import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js"

// 核心：自动化思维
// 1.创建文件夹（项目名）

fs.mkdirSync(getRootPath());

// 2.创建 index.js

fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate());

// 3.创建 package.json

fs.writeFileSync(getRootPath() + "/package.json", "package");

// 4.安装依赖


function getRootPath() {
    return "./demo"
}