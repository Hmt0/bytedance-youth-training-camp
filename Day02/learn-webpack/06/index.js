// 生成.md .html

// plugin核心：在对应的时机做对应的事
module.exports = class HtmlPlugin{
    constructor() {

    }
    // webpack init plugin
    apply(complier) {
        // complier webpack 所有的信息
        console.log("html - plugin");
        // hooks：事件
        complier.hooks.emit.tapAsync(
            "HtmlPlugin",
            function(compilation, callback) {
            // 编译的时候会生成对象
            console.log("emit");
            
            // 基于数据生成对应文件
            console.log(compilation.assets);
            compilation.assets["work.md"] = {
                source: function() {
                    return "## work";
                },
                size: function() {
                    return 11;
                },
            };

            callback();
        })
    }
}