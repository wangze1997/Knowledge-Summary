# 异步解决方案

### 最先提出的异步解决方案是社区提出的定时器嵌套。

```javascript
setTimeout(function(){
	console.log(1)
	setTimeout(function(){
		console.log(2)
		setTimeout(function(){
			console.log(3)
		},1000)
	},1000)
},1000)
```



















ES6的promise对象