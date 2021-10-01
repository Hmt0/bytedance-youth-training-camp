import ejs from "ejs";
import fs from "fs"

export function createIndexTemplate(config) {
    // const template = fs.readFileSync("./template/index.ejs").toString();
    const template = fs.readFileSync("./template/index.ejs", "utf-8");
    const code = ejs.render(template, {
        router: config.middleware.router,
        static: config.middleware.static,
        port: config.port
    });
    // console.log(code);

    return code;
}