## 数组很多方法都可以模拟实现

### 可模拟实现reduce、filter、map、forEach、some、every、find、findIndex、indexOf、lastIndexOf

- 模拟实现redece方法

```javascript
Array.prototype.myReduce  = function (fn,num){
        let self = this,len = this.length;
        if(num == undefined){
            num = self[0]
            for(let i = 1; i < len; i++){
                num = fn(num,self[i],i,self)
            }
        }else{
            for(let i = 0; i < len; i++){
                num = fn(num,self[i],i,self)
            }
        }
        return num;
}
// 传不传第二个参数的区别。
[10, 2, 3, 4].myReduce(function(num,item){console.log([num,item])});
 // [10, 2]
 // [undefined, 3]
 // [undefined, 4]
 // undefined
[10, 2, 3, 4].myReduce(function(num,item){console.log([num,item])},10);
 // [10, 10]
 // [undefined, 2]
 // [undefined, 3]
 // [undefined, 4]
 // undefined
```

