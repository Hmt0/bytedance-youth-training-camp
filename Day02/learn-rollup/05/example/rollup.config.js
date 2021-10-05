import { md2html, alias } from "../dist/bundle.js";
import path from "path";

export default {
    input: './index.js',
    output: {
        file: "./dist/bundle.js",
        format: "esm"
    },

    plugins: [
        md2html(),
        alias({ 
            "@/": path.resolve(__dirname, "./src")
        })
    ],
};