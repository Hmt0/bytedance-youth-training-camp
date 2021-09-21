import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js"
import { createPackageJsonTemplate } from "./packageJsonTemplate.js"

// 核心：自动化思维

const inputConfig = {
    packageName: "demo",
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