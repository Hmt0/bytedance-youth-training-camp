import { remark } from "remark";
import remarkHtml from "remark-html";
import fs from "fs";
import path from "path";

export function md2html() {
    return {
        load(id) {
            // 自己加载代码
            
            // 自己判断
            if(id.endsWith(".md")) {
                console.log('----------');
                console.log(id)
                console.log("md2html")
                const source = fs.readFileSync(id, "utf-8");

                return new Promise((resolve, reject) => {
                    remark()
                        .use(remarkHtml)
                        .process(source)
                        .then((file) => {
                            resolve(`export default \`${String(file.value)}\``);
                        })
                })
                
            }
        }
    }
}

export function alias(options) {
    return {
        resolveId(id) {
            // 自行解析id
            if(id.startsWith("@/")) {
                console.log("------------0000000000", id.slice(2))
                const prefix = id.slice(2);
                const r = path.resolve(options["@/"], prefix);
                console.log(r);
                return r;
            }
        },
    }
}