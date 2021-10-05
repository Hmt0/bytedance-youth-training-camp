import md2html from "../index.js";

export default {
    input: './index.js',
    output: {
        file: "./dist/bundle.js",
        format: "esm"
    },

    plugins: [md2html()]
};