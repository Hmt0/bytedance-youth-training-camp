自动化测试就是用脚本去自动帮助我们测试
.spec.js是单元测试文件，jest会遍历找到.spec.js文件
为了程序的可测试性，需要好好组织代码，明确输入输出

cypress浏览器环境 e2e测试
npx cypress open-ct
npm install @cypress/vue@next --dev
npm install @cypress/vite-dev-server
在cypress plugin中进行配置：
on('dev-server:start', (options) => {
    const viteConfig = {
      // import or inline your vite configuration from vite.config.js
    }
    return startDevServer({ options, viteConfig })
  })
}

@testing-library/vue

测试驱动开发 100%

husky
git init
npx husky install
npx husky add .husky/pre-commit "npx run test"

eslint 静态检测代码问题
"global": {
    "_": true
},

任务：在commit-msg做lint检验