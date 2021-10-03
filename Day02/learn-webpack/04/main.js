import { foo } from './foo'
// 懒加载
const btn = document.createElement("button")
btn.innerText = "点我"

btn.onclick = async () => {
    // 加载bar.js
    // const bar = await import("./bar.js");
    // bar是一个Promise

    // const {bar} = await import("./bar.js")
    const {bar} = await import(/* webpakChunkName: "bar*/"./bar.js")
    // import 结果是一个module，把bar结构出来
    console.log(bar());
};

document.body.append(btn);

console.log("main")