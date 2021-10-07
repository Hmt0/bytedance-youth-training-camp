/**
 * - start move end
 * - pressstart pressend
 * - tap
 * - panstart pan panend
 */

function enableGrsture(ele) {
    // 判断事件是否触发
    console.log("ontouchstart" in document)
    if(!("ontouchstart" in document)) {
        console.log("pc"); 
        ele.addEventListener("mousedown", (event) => {
            let move = (event) => {
                console.log("move");
            };
            let end = (event) => {
                console.log("end");
                document.removeEventListener("mousemove", move);
            }
            console.log("鼠标点击开始")
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", end, {once: true});
        });
    }
    else{
        ele.addEventListener("touchstart", () => {
            console.log("点击");
        });
        ele.addEventListener("touchmove", () => {
            console.log("移动");
        });
        ele.addEventListener("touchend", () => {
            console.log("结束");
        });
    }
}