// loader: source -> js
// md -> html string

// const { remark } = require("remark");
// const remarkHtml = require("remark-html");
import { remark } from "remark";
import remarkHtml from "remark-html";

export default function(source) {
    // webpack注入的上下文
    // console.log("---------------", source);
    var callback = this.async();

    remark()
        .use(remarkHtml)
        .process(source)
        .then((file) => {
            console.log('------------------',file);
            // console.error(reporter(file));
            // console.log(String(file));
            callback(null, `export default \`${String(file)}\``);
        });
}