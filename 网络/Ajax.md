# 	Ajax

> （Asynchronous JavaScript and XML）用javascript完成异步网络请求。如果仔细观察一个Form的提交，你就会发现，一旦用户点击“Submit”按钮，表单开始提交，浏览器就会刷新页面，然后在新页面里告诉你操作是成功了还是失败了。如果不幸由于网络太慢或者其他原因，就会得到一个404页面。这就是Web的运作原理：一次HTTP请求对应一个页面。如果要让用户留在当前页面中，同时发出新的HTTP请求，就必须用JavaScript发送这个新请求，接收到数据后，再用JavaScript更新页面，这样一来，用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。

### 手写一个ajax

```javascript
<script>
	function ajax(type,url,data,method){
            let xhr;
            if(window.XMLHttpRequest){
               xhr = new XMLHttpRequest();
            }else{
               xhr = new ActiveXObject("Microsort.XMLHttp")
            }
            if(/^get$/i.test("GET")){
               xhr.open(type,url + ? + data,true)
               xhr.send();
            }else{
               xhr.open(type,url,true)
               xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
               xhr.send(data);
            }
            xhr.onreadystatechange = function(){
                if(xhr.readystate == 4 && xhr.status == 200){
                    method();
                }
            } 
	}    
	// onreadystate会执行3次
	// post请求一般会在send中传入参数，还要设置请求头
</script>
```

### readystate的值

- 0 代表请求未初始化
- 1 代表和服务器建立连接
- 2 代表请求已经被接受
- 3 代表请求正在处理中
- 4 代表请求完成等待响应

