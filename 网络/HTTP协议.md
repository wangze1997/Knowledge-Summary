# HTTP协议

 

http头部关于缓存的字段

http报文结构都包含什么（头，行，体）

301与302的区别，应用场景

| 字段名        | 详细信息                                      |
| ------------- | --------------------------------------------- |
|               |                                               |
|               |                                               |
|               |                                               |
| Uset-Agent    | 记录浏览器的相关信息                          |
| referer       | 记录上次浏览过的网站                          |
| Set-Cookie    | 设置cookie信息                                |
| httpOnly      | 无法通过document.cookie设置字段信息           |
| MaxAge        | 设置cookie到期时间                            |
| Expires       | 决定缓存与cookie的到期时间                    |
| Cache-Control | 决定缓存到期时间，是相对时间，权重没expires高 |
| If-None-Match | 本地资源未修改返回304（比较标记）             |
| Etag          | 资源标识                                      |

