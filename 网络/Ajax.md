# 	Ajax

> （Asynchronous JavaScript and XML）用javascript完成异步网络请求。如果仔细观察一个Form的提交，你就会发现，一旦用户点击“Submit”按钮，表单开始提交，浏览器就会刷新页面，然后在新页面里告诉你操作是成功了还是失败了。如果不幸由于网络太慢或者其他原因，就会得到一个404页面。这就是Web的运作原理：一次HTTP请求对应一个页面。如果要让用户留在当前页面中，同时发出新的HTTP请求，就必须用JavaScript发送这个新请求，接收到数据后，再用JavaScript更新页面，这样一来，用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。

### 手写一个ajax

```javascript
promise封装ajax兼容性写法
<script>
	const getJSON = function (url,type,param) {
            return new Promise((resolve,reject) => {
                let xhr;
                if(window.XMLHttpRequest){
                    xhr = new XMLHttpRequest();
                }else{
                    xhr = new ActiveXObject("MircoSort.XMLHttp")
                }   
                if(type == "get"){
                    xhr.open(type,url + "?" + param,true);
                    xhr.send();
                }else{
                    xhr.open(type,url,true)
                    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded") //你可以不写。
                    xhr.send(param);
                }
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            resolve(xhr.response);
                        }else{
                            reject(new Error("error"));
                        }
                    }
                }   
            })
        }
	// post请求一般会在send中传入参数，还要设置请求头
	// 如果设置不异步的话那么send方法一定要写在最后
</script>
```

### readystate的值

- 0 代表请求未初始化
- 1 代表和服务器建立连接
- 2 代表请求已经被接受
- 3 代表请求正在处理中
- 4 代表请求完成等待响应

只要和服务器建立连接，onreadystatechange事件就会执行4次， 分别是： 0-1、1-2、2-3、3-4，对应着 readyState 的每个变化。（如果发生跨域错误的话，浏览器会返回值为4的状态码）

### GET请求的缓存问题

- 如果不设置响应头为`cache-control`为`no-cache`浏览器将会把响应缓存下来而且再也不无法重新提交请求。你也可以添加一个总是不同的 GET 参数，比如时间戳或者随机数 (详情见 [bypassing the cache](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache))。

