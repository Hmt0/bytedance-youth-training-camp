import ejs from "ejs";
import fs from "fs";
import prettier from "prettier"
import { fileURLToPath } from "url";
import path from "path";

export function createPackageJsonTemplate(config) {
    // const template = fs.readFileSync("./template/index.ejs").toString();
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const template = fs.readFileSync(
        path.resolve(__dirname, './template/package.ejs'),
        "utf-8"
    );
    const code = ejs.render(template, {
        packageName: config.packageName,
        router: config.middleware.router,
        static: config.middleware.static
    });
    // console.log(code);

    return prettier.format(code, {
        parser: "json"
    });
}
