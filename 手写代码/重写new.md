# New

new一个函数这个过程中都发生了什么。

- 创建一个this对象。将函数的prototype指向此对象的_proto_
- 执行函数中的代码
- 最后隐式的返回这个this对象(前提是没有引用返回)

```
function myNew(fn){
	let arr = [...arguments].slice(1)
	let obj = {};
	obj.__proto = fn.prototype;
	let ret = fn.apply(obj,arr);
	if(typeof ret == "object" && ret != null || typeof ret == "function" ){
		return ret;
	}
	return obj;
}
```

顺便重写个instanceof

```
function instanc(obj,fn){
	let proto = obj.__proto__,
		prototype = fn.prototype;
	while(proto){
		if(proto == prototype) return true;
		proto = proto.__proto__;
	}
	return false;
}
// 测试
instanc([],Array) // true
```

