# loaders

webpack只能默认只能打包js文件，如果想要打包css、less、图片、typescript那只能借助loader。

### 打包css

``` javascript
rules:[
    {
        test:/\.css$/,
        use:["style-loader","css-loader"]
    }
]
// 如果想要打包成一个或多个css文件的话，会合并成一个css文件。
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
rules:[
    {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,"css-loader"]
    }
]
plugins:[
    new MiniCssExtractPlugin({
        filename:"[name].css"
    })
]
```

### 打包less成css文件

如果只想将less打包的话，可以直接在配置项数组中的最后面加上less-loader，并改变test的扩展名为.less。需要把less-loader与less包都下载下来。如果打包sass的话需要下载node-sass、sass-loader。

```javascript
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
rules:[
    {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
    }
]
// 输出为css文件
plugins:[
    new MiniCssExtractPlugin({
        filename:"[name].css"
    })
]
```

### postcss

postcss不是一个插件，他可以调用插件完成相应的功能，比如完成前缀自动添加。还可以压缩css代码，需要通过postcss、postcss-cssnext、postcss-loader、cssnano等相关包。

```javascript
// 将css代码压缩，并输出为css文件 
{
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: [
                    require("cssnano")(), // 压缩
                    require("postcss-cssnext")() // 自动添加前缀
                ]
            }
        },
    ]
}
```

### 清除没有用到的css代码

生成的css文件可以对比html与js文件清除没有用到的样式。

```javascript 
const PurifyCSSPlugin = requrie("purifycss-wepack"); 
// 依赖 purifycss-wepack purigy-css
const path = require("path");
const glob = require("glob");
plugins:[
    new PurifyCSSPlugin({
        paths:glob.sync(path.join(_dirname:"./*.html"))，
        paths:glob.sync(path.join(_dirname:"src/*.js")) 
    	// 多路径的话就是全局匹配，下载glob-all并且改变上面的glob参数 
    })
]
```

### html模板生成

webpack在打包结束后，会把生成的js文件和css文件打入到模板中。还有个clean-webpack-plugin

```javascript
// html-webpack-plugin
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html",
            minify:{
                removeComments:true, //清理注释
			}
        })
    ]
}
```

### 提取公共js代码

针对于多入口文件，可以提取他们的公共代码。

```javascript
output:{
    chunkFilename:"[name].js"
}
// webpack4新增特性
optimization:{
    splitChunks:{
        cacheGroup:{
            common:{
                name:"common",
                chunks:"all",
                minSize:1,//形成包的最小体积
                minchunks:2
	        }
        }
    }
}
```

### webpack处理图片

- url-loader 将文件打包为Base64编码，当图片特别小（1~2k）的时候适用。
-  img-loader 必选
-  file-loader 图片输出的话会用到

```javascript
 {
    test:/\.(jpg|jpeg|png|gif)$/,
    use:[{
        loader:"url-loader",
        options:{
            name:"[name].[ext]", 
            limit:100000, //限制图片编码，<=100kb进行base64编码
            outputPath:"img" // 不满足条件，单独抽离
        }··
    }]
}
{
    // 处理img标签中的图片需下载html-loader
    test:/\.html$/,
    use:[
        {
            loader:"html-loader",
            options:{
                attrs:["img:src"]
            }
        }
    ]
}
 // 图片压缩 不常用
{
    loader:"img-loader",
    options:{
        plugins:[
            require("imgemin-pngquant")({
               quality:[0.3,0.5] // 压缩范围
            })
        ]
    }
}
```

  