# HTTP协议

HTTP（Hyper Text Transfer Protocal）超文本传输协议，是基于 TCP/IP 协议的[**应用层协议**](http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html)。由请求和响应构成，是一个标准的C/S协议。

### HTTP请求报文

- 请求行
  - 请求方式（Method）
  - 协议版本（Version）
  - 资源路径URL
- 请求头
  - 一些字段信息
- 空行
  - 分割请求头和请求正文
- 请求正文
  - 请求的HTTP数据

![](https://s1.51cto.com/images/20180426/1524747772856125.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=)

### HTTP响应报文

- 状态行
  - 状态码（Status Code）
  - 状态信息（Status Information）
  - 协议版本（Version）
- 响应头
  - 一些字段信息
- 响应正文
  - 相应的HTTP数据

![](https://s1.51cto.com/images/20180426/1524748488887423.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=)

### 常见的一些HTTP状态码

- 2XX成功
  - 200 请求成功
  - 204 请求成功，但相应正文没内容（No Content）

- 3XX重定向
  - 301 永久重定向，资源被永久更换了URL
  - 302 临时重定向，资源临时更换了URL
  - 303 与302类似含义，强制浏览器使用GET请求
  - 304 重定向到本地，告诉浏览器从本地缓存中取东西
  - 307 与302类似含义，期望浏览器使用GET请求请求资源

- 4XX客户端错误
  - 400 客户端存在着语法错误
  - 403 服务器拒绝客户端的请求
  - 404 服务器找不到请求的资源

- 5XX服务器错误
  - 500 服务器内部错误
  - 503 服务器表示繁忙，稍后在请求

### HTTP方法

- GET
  - 访问资源
- POST
  - 向服务器发送数据
- HEAD
  - 类似于GET，但是他不会把请求体发给服务器
- DELETE
  - 请求服务器删除资源
- PUT
  - 请求服务器更新资源

### GET与POST请求的区别

如果没有前提的话，不使用任何规范，只考虑语法和理论上的HTTP协议，那这样GET与POST没有任何区别，只是名字不同。如果是基于RFC规范的，则有很多区别

- GET是用来获取数据的，POST是用来发送少量数据的
- GET请求的参数在URL中可见，POST不可见
- GET请求不安全，POST请求较安全
- GET请求对于长度是有限制的，一般要求是2048个字符，POST请求无限制（他的字段信息在请求体中）
- GET请求的编码类型有要求，一般是ASCLL码，POST请求无限制，2进制数据也可以
- GET请求可以被收藏为书签，POST请求不可以收藏为书签
- GET请求的参数会保存到浏览器历史记录中，POST不会
- GET请求按回退按钮的话不会重新提交，POST会被重新提交

### [HTTP协议版本更替](http://www.ruanyifeng.com/blog/2016/08/http.html)

### HTTP常见的一些字段名

| 字段名           | 详细信息                                            |
| ---------------- | --------------------------------------------------- |
| Accept           | 指定客户端可以接受的内容类型                        |
| Accept-Charset   | 浏览器可以接受的字符编码集。                        |
| Accept-Language  | 浏览器可接受的语言                                  |
| Accept-Encoding  | 指定浏览器可以支持的web服务器返回内容压缩编码类型。 |
| Content-Type     | 定义字符的编码格式                                  |
| Content-Language | 相应的语言                                          |
| Content-Length   | 声明本次回应的数据长度                              |
| Content-Encoding | 定义数据的压缩格式                                  |
| Connection       | 定义持久连接                                        |
| Uset-Agent       | 记录浏览器的相关信息                                |
| Referer          | 记录上次浏览过的网站                                |
| Set-Cookie       | 设置cookie信息                                      |
| Cookie           | 浏览器发送请求时会把cookie信息都带上                |
| HttpOnly         | 无法通过document.cookie设置字段信息                 |
| MaxAge           | 设置cookie到期时间                                  |
| Expires          | 决定缓存与cookie的到期时间                          |
| Cache-Control    | 决定缓存到期时间，是相对时间，权重没expires高       |
| If-None-Match    | 本地资源未修改返回304（比较标记）                   |
| Etag             | 资源标识                                            |

