import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import { fileURLToPath } from "url";
import path from "path";

export function createIndexTemplate(config) {
    // const template = fs.readFileSync("./template/index.ejs").toString();
    const __dirname = fileURLToPath(import.meta.url)
    // 或者const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const template = fs.readFileSync(
        path.resolve(__dirname, "../template/index.ejs"),
        // 或者path.resolve(__dirname, "./template/index.ejs"),
        "utf-8"
    );
    // console.log(template)
    const code = ejs.render(template, {
        router: config.middleware.router,
        static: config.middleware.static,
        port: config.port
    });
    // console.log(code);

    return prettier.format(code, {
        parser: "babel"
    });

}