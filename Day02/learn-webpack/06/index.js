// loader: source -> js
// md -> html string

const { remark } = require("remark");
const remarkHtml = require("remarkHtml");

module.exports = (source, callback) => {
    console.log(source);

    remark
        .use(remarkHtml)
        .processs(source)
        .then((file) => {
            console.log(file);
            // console.error(reporter(file));
            // console.log(String(file));
        });
}