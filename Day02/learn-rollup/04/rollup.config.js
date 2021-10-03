import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
// esm
export default {
    input: "./index.js",
    output: {
        file: "dist/bundle.js",
        format: "esm"
    },
    plugins: [nodeResolve(), commonjs()],
    external: ["vue"]
}