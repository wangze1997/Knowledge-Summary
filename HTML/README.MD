# HTML

> HTML（超文本标记语言），1993年6月由IETF小组起草，1996年1月HTML3.2公布，1999年12月HTML4.01以XML语法重新构建，比较严格，被w3c评为业内标准。2006年-2014年历时8年的HTML5标准体系`完成。`



### !DOCTYPE 的作用是什么?

写上这句话浏览器就会用自己具有的最高标准来渲染，不写这句话或者写错了就会以一种怪异模式也就是兼容模式来解析此文档，在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。`<DOCTYPE html>` 并不是一个标签，它必须要声明在文档的第一行。

### mate 标签都有哪些

`mate`标签一般都是由`name`和`content`或者由`http-equiv`和`content`属性构成。

- `<mate name="keywords" content="定义关键字>"`
- `<mate name=“description” content="定义网站描述>"`
- `<mate name="viewprot" content="定义移动端适配>"`
- `<mate http-equiv="author" content="定义网站作者>"`
- `<mate http-equiv="refresh" content="n，url=定义网页在n秒内跳转>"`
- `<http-equiv="expires" content="GMT时间，定义网页到期时间>"`
- `<mate http-equiv="set-cookie" content="网页到期，cookie删除>"`

### 行内元素有哪些？块级元素有哪些？HTML5新增语义化元素有哪些？

- **行内元素** em i b strong span img  input button select textarae small big label
- **块级元素** div p from table h1-h5 ul ol li di dd dt  
- **语义化元素** header footer nav  section aside atricle summary details mark time

### 行内元素与块级元素的区别

- **行内元素** 不能通过css设置宽高，不独占一行，magin与padding只能设置左右不能设置上下
- **块级元素** 可以通过css修饰宽高，独占一行

### 渐进增强与优雅降级

- 渐进增强：一开始针对于低浏览器版本构建页面，保证能完成基本功能。然后再根据高版本浏览器进行处理。
- 优雅降级：一开始就构建完整的功能，然后在根据浏览器版本向后兼容实现。

### 对mate标签viewprot的理解

viewport的深度好文

用于移动端适配，没有他的话就会以设备像素（物理像素）显示页面，这样一个300px的盒子在移动端会看着很小，有了它就会以设备像素比所计算的像素来显示页面。

```HTML 
<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximun-scale=1.0,user-scalable=no">
```

- width：设备宽度
- device-width：设备宽度
- minimum-scale：最小缩放比
- maximun-scale：最大缩放比
- user-scalable：是否允许用户缩放

### localStorage，sessionStorage，cookie之间的区别

| 特性         | localStorage           | sessionStorage   | cookie               |
| ------------ | ---------------------- | ---------------- | -------------------- |
| 与服务器通信 | 否                     | 否               | 是                   |
| 数据存储周期 | 除非清理，否则一直存在 | 页面关闭就被清理 | 有服务器决定到期时间 |
| 数据存储大小 | 5k                     | 5M               | 5M                   |

### 描述一下主流浏览器及其内核

| 浏览器          | 内核    |
| --------------- | ------- |
| 谷歌（chrome）  | Blink   |
| 欧朋（opear）   | Blink   |
| 苹果（safari）  | Webkit  |
| 火狐（firefox） | Gecko   |
| 微软（IE）      | Tredent |

### HTML5的变化

- 增加了很多新的语义化标签
- 删除了一些纯样式标签
- 增强了表单
- 增加了许多新的API
  - 定位（需要地理位置的功能）
  - 重力感应（陀螺仪）
  - canvas绘图功能
  - LocalStorage和SessionStroage（本地存储）
  - WebSocket（通信协议）
  - request-animation-frame（动画优化）
  - webWorker（文件的异步，提升性能，提升交互体验）
  - Fetch（传说中要替代ajax的东西）
  - 音视频（audio，video）