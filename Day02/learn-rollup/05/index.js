import { remark } from "remark";
import remarkHtml from "remark-html";
import fs from "fs";

export default function() {
    return {
        load(id) {
            // 自己加载代码
            
            // 自己判断
            if(id.endsWith(".md")) {
                console.log('----------');
                console.log(id)
                console.log("md2html")
                const source = fs.readFileSync(id, "utf-8");

                remark()
                    .use(remarkHtml)
                    .process(source)
                    .then((file) => {
                    console.log(String(file))
                })
            }
        }
        
        
    }
}