import ejs from "ejs";
import fs from "fs";
import prettier from "prettier"

export function createPackageJsonTemplate(config) {
    // const template = fs.readFileSync("./template/index.ejs").toString();
    const template = fs.readFileSync("./template/package.ejs", "utf-8");
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
