// 图片切割合并 视频压缩 调用底层硬件等 js处理不了 使用动态链接库

const buf1 = Buffer.alloc(10) // 分配十个字节的空间
console.log(buf1) // <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.from('a');
console.log(buf2) // <Buffer 61>

const buf3 = Buffer.from('给'); // utf-8
console.log(buf3) // <Buffer e7 bb 99>

const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4, buf4.toString())