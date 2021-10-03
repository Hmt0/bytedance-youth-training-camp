import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./index.js",
    output: [ {
        file: "dist/bundle.esm.js",
        format: "esm",
        plugins: [terser()],
    },
    {
        file: "dist/bundle.cjs.js",
        format: "cjs",
    }
    ],
    plugins: [json(), resolve(), commonjs()],
    external: ["vue"]
}