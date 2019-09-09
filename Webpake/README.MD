# webpake

> webpake是前端自动化构建工具，最新版本已经到webpake4.0，npm是nodejs的包管理器，webpake依赖于node.js。常见的还有Gulp。webpack是npm的一个生态模块。

#### [webpack好文](https://www.cnblogs.com/hezihao/p/8028591.html)

### 前端自动化构建工具作用如下

- 代码转换：将TypeScript编译成Javascript，将Sass编译成css文件
- 文件优化：压缩Javascript、CSS、HTML代码、压缩合并图片
- 模块合并：在采用模块化的项目里会有多个模块和文件，需要通过构建功能将模块分类合并一个文件
- 自动刷新：监听本地源代码发生变化，刷新浏览器

### package-lock.json

锁定安装时包的版本号。这个package-lock.json 是在 `npm install`时候生成一份文件，用以记录当前状态下实际安装的各个npm package的具体来源和版本号，还有依赖包。

### webpack.config.js

他是webpack的配置文件，主要由入口、出口、plugin、loader组成。

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:{
        main:"./src/index" 
        ... //也可以定义多入口
    },
    output:{
    	filename:"index-main.js"
    	filename:"[name].js" //定义多出口
	},
    module:{ //打包非js资源
        rules: [ ]
    }，
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }) // 引进的插件,可以写多个
    ]
}
```

### package.json

使用`npm init`进入环境时，会自动生成这个说明文件。可以使用`npm init -y`省略提示说明。都有包名、包的版本号、包的描述、包的作者、开发环境所依赖的包。

### 本地服务器

webpack可以安装本地服务器，用于调试。`webpack-dev-server`，先安装全局，在安装局部。可以完成实时刷新，因为他可以自动监听。他会自动整合主目录下`index.html`与出口文件整合在一起，但必须有html模板输出，应该是把输出的文件提到主文件夹（？），打开本服务器的时候他会依赖配置文件。

