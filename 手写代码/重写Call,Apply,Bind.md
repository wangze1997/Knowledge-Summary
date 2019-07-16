## 重写call的思路

- 将原函数添加到传进来的上下文对象
- 通过这个对象调用原函数。
- 最后用delete删除这个属性

```javascript
Function.prototype.myCall = function(obj){
	let arr = [...arguments].slice(1);
	obj.fn = this;
	let ret = obj.fn(...arr);
	delete obj.fn;
	return ret;
}
```

```javascript
Function.prototype.myApply = function(obj){
	obj.fn = this;
	if(arguments[1]){
		var ret = obj.fn(...arguments[1])
	}else{
		var ret = obj.fn();
	}
	delete obj.fn;
	return ret;
}
```

## 重写bind注意的问题

- 实参可以被累计保存
- 返回的函数可以被new，原型对象指向原函数的prototype对象

```javascript
 Function.prototype.myBind = function(obj){
        let arr1 = [...arguments].slice(1);
        let that = this;
        function retFn (){
            return this instanceof retFn ? that.apply(this[...arr1,...arguments]):that.apply(obj,[...arr1,...arguments])
        }
        function F(){}
        F.prototype = that.prototype
        retFn.prototype = new F()
        retFn.prototype.constructor = retFn;
        return retFn;
}
```

