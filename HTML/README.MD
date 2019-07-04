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