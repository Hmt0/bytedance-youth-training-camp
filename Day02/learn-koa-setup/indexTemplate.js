import ejs from "ejs";
import fs from "fs"

export function createIndexTemplate() {
    // const template = fs.readFileSync("./template/index.ejs").toString();
    const template = fs.readFileSync("./template/index.ejs", "utf-8");
    const code = ejs.render(template);
    console.log(code);

    return code;
}