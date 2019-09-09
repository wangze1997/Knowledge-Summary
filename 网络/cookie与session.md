## Cookie

服务器通过设置`set-cookie`响应头，把cookie信息发送给客户端，客户端将cookie保存到本地， 等下一次在发送同一网络请求时，会自动带上cookie信息，服务器会判断出具体用户，会把有关的信息返回给客户端。

前台可使用`document.cookie`写一个自己的cookie，他也会保存到本地。但几乎没有意义。因为下一次请求时，服务器压根不认识他，也没发返回资源。

子域能拿到主域中的cookie，如`www.baidu.com`可以拿到`baidu.com`的cookie，相反不能。

百度实现自动登入的过程 

- 初始状态，没有登入
- 写入用户名或者密码，返回给服务器
- 服务器看到是正确的，会创建一个cookie写入用户基本信息（加密）
- 把cookie返回给客户端，保存到本地
- 以后每次请求同一资源时，客户端会自动带上这些cookie。
- 服务器看到带有ID的cookie，就可以解析这个加密的cookie。拿到用户的相关信息。返回响应的页面。

## Session

浏览器第一次发送请求时，服务器端会生成一个Hash表，和一个sessionID标识这个表。sessionID保存到cookie中返回给客户端。等客户端再次请求时，服务器端会拿到相应cookie解析成sessionID，并和哈希表对比，找到对应的哈希表，取得相应资源，返回给客户端。

session是依赖于cookie的，因为他要用cookie存储sessionID值。

### Session与Cookie的区别

- Session存储与客户端，Cookie存储于服务器端
- Cookie不安全，容易伪造，Session比较安全
- Cookie每次HTTP请求都会带上，影响网络性能
- Seesion存的数据多的话，会占用服务器较多的内存资源。

### cookie操作

通过document.cookie可以获取同域名下的所有cookie信息。设置的话就是document.cookie等于一个字符串，字符串中包含属性值和属性名。删除的话可以直接从浏览器设置中删除。修改的话就是直接覆盖之前的字段信息。

[cookie操作](https://www.runoob.com/js/js-cookies.html)

### Token