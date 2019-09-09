# ES6

> ES6是javascript历史上的一次重大变革，增加了很多新的API，弥补了之前语言的不足。于2015年6月正式发布。他的目标是，使javascript语言可以编写大型的应用程序，成为企业级开发语言。



### javascript与ecmascript的区别和联系

### ES5的[Object.defineProperty](https://segmentfault.com/a/1190000007434923)

### let和const声明方式

### 解构赋值与扩展运算符

#### 变量的解构赋值(左侧都是变量)

- 数组的解构赋值
- 对象的解构赋值（是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者）
- 字符串的解构赋值
- 函数形参与实参的解构赋值

如果解构失败（左边的变量和右边没有匹配项）则返回undefined，可以指定默认值，但相对应的必须是undefind才会生效。如果赋值解构左侧有扩展运算符的话，那他必须要放在最后一位，否则报错。

注意点：

- 扩展运算符的使用


凡是部署有iterator接口的数据集合都可以用扩展运算符。他还可以和解构赋值配合一起使用，ES2018将扩展运算符引入到对象，所以对象也可以使用扩展运算符。

### 数值的扩展

- 0b代表2进制，0o代表8进制
- 指数运算符 **
- Number函数上增加了isFinite ()，isNaN()，isInteger()
- 将全局方法parseInt()，parseFloat()移到数值函数身上。

### 字符串的扩展

- 增加了字符串模板，可以在字符串中输出变量
- 为字符串部署了iterator接口
- 在字符串实例上增加了许多方法
  - includes() 判断一个字符串是否包含在另一个字符串中。
  - repeat() 返回一个新串，重复n次
  - startsWith() 返回布尔值，判断字符是否在字符串开头位置
  - endsWith() 返回布尔值，判断字符是否在字符串结尾位置
  - padStart() 在开头处补全字符串
  - padEnd() 在开头处补全字符串
  - trimStart()  消除字符串开头的空格
  - trimEnd() 消除字符串结束的空格

### 函数的扩展

- rest参数（必须放在最后一位，否则报错）
- 参数默认值

- 箭头函数
  - 不能被new
  - 没有arguments
  - this是其定义环境时所在的this，一旦确定不能改变
  - 不存在函数声明
  - 不能通过call，apply，bind改变其this指向
- 体内不能有yeild语句，不能当作generator函数
  
- 重要特性、只要函数参数使用了rest参数，解构赋值，内部隐式转换为严格模式。

### 数组的扩展

在Array函数身上增加了Array.form与Array.of方法

- Array.form() 将一个类数组或者是部署有iterator接口的数据集合转化为真数组
- Array.of() 将里面的参数加入到一个真数组中，如果只有一个参数的话不是其长度，主要是弥补数组建立

在Array实例(数组)身上增加了许多方法

- find(fn)
- findIndex(fn)
- includes()
- flat()
- keys()
- values()
- entries()

### 对象的扩展

- 属性的简洁表达法
- 属性名表达式
- 在Object函数身上增加了许多方法
  - Object.is() 可用于判断+0与-0，NaN
  - Object.assign()
  - Object.getOwnPropertyDisciptors()
  - Object.setPrototypeOf()
  - Object.getPrototypeOf()
  - Object.keys()
  - Object.values()
  - Object.entries()

### Symbol

> ES6引入了一种新的数据类型Symbol，他是一种原始数据类型。由Symbol函数执行产生。ES6之前对象的属性名只能是字符串，这很容易造成命名冲突，如果对象属性同名那么后面的属性值覆盖前面的。Symbol每次产生的值都是独一无二的，使用它可以解决命名冲突问题。

- Symbol函数不能被new
- 函数参数中可以添加对此值的描述，即使描述一样，也是2个不同的Symbol值
- Symbol函数身上的for与keyfor方法
  - for(描述) 用来登记一个Symbol值，如果查到已经登记，就返回之前已经登记的Symbol值
  - keyfor(symbol值) 用来返回一个Symbol值的描述

### Set与Map数据集合

Set是一种新的数据集合，类似于数组，但成员都是唯一的。

Set身上的属性如下

- add has delete clear keys values entries foreach

Weakset类似于数组，但他的成员都是引用。并且都是弱引用，不能用for...of循环

- add delete has

Map是一种新的数据集合，类似于对象。成员的键可以是任意数据类型。

Map身上的属性如下

- set get has delete clear keys values entries foreach

WeakMap类似于对象，但他的键名都是引用。并且都是弱引用，不能用for...of循环

- get set delete has

两者区别：

- 值类型方面，是否具有遍历方法，是否具有terator接口
- weakSet、weakMap的成员都是弱引用，如果不使用他们的话，就会被垃圾回收机制自动回收。对weakMap来说是限定的key为引用而不是value。

### Proxy

Proxy在目标对象前面架设一层拦截，对目标对象的访问和赋值都必须要经过这层拦截层。proxy原为代理的意思，在这里指代理某些操作。

Proxy的拦截操作总共有13种。常见的拦截操作。。。

- get(target,propKey,receiver) 拦截取值操作
- set(target,propKey,value,receiver) 拦截赋值操作
- has(target) 拦截用in操作符判断一个属性是否再此对象的操作
- delete(target) 拦截用delete运算符删除一个对象属性的操作
- setPropertyOf(target) 拦截设置对象原型的操作
- getPropertyOf(target) 拦截访问对象原型的操作
- apply(target) 拦截Proxy实例调用的操作，因为Proxy第一个参数也可以传一个函数
- defineProperty(target) 拦截定义一个对象的属性的操作

proxy如果不设置拦截函数，那么操作他就和操作被代理对象一样。不设置相关拦截函数的话，那么相关操作相当于直接操作原对象。设置相关拦截函数的话，只有操作target才能作用到原对象上。

### Reflect

reflect也是为操作对象提供的新的API，对象的一些传统操作方式都可以用reflect对象去做。reflect对象 上的方法和proxy所能定义拦截的方法是一模一样的，都是13种。

### class类

ES6的class就是原型的语法糖，完全可以用ES5实现。他只是让原型的写法更加清晰。

判断子类是否继承父类`Father.prototype == son._proto_._proto_`

使用class定义的构造函数不能被执行。不存在变量提升。所有定义的方法都是不可枚举的，内部定义的函数会自动转换成ES5严格模式。 

### Iterator和for...of循环

iterator遍历器接口，也就是在一些数据集合上写上Symbol.iterator属性（属性值是个对象）。凡是部署有iterator接口的数据集合都可以被for...of循环并且可以被扩展运算符扩展成真数组。

默认部署有itrator接口的数据集合有

- Array（真数组）
- argumengs对象
- Map数据结构
- Set数据结构
- 字符串
- NodeList（dom元素组成的数组）

对象默认不具有iterator接口，要想使他可以被扩展运算符扩展，或者可以被for...of循环可以手动给他部署。

```javascript
Object.prototype[Symbol.iterator] = function(){
        var arr = Object.keys(this);
        var self = this;
        var curIndex = 0;
        let next = function(){
            return {
                value:self[arr[curIndex]],
                done:arr.length == curIndex ++
            }
        }
        return {
            next
        };
} // next方法系统会自动调用，直到它返回的值是true，他会把每次返回done为false的value记录下来

// 重写数组的iterator接口
Array.prototype[Symbol.iterator] = function(){
        var self = this;
        var curIndex = 0;
        let next = function(){
            return {
                value:self[curIndex],
                done: curIndex++ == self.length
            }
        }
        return {
            next
        }
}
// 使用Generator函数跟简便
Object.prototype[Symbol.iterator] = function* (){
        var arr = Object.keys(this);
        var curIndex = 0;
        while(arr.length >  curIndex){
            yield this[arr[curIndex]];
            curIndex ++
        }
}
```

### Generator函数

可以看作是一个状态机，封装了很多内部状态。函数执行会产生一个遍历器对象，可以依次遍历函数的状态。遍历器对象上有个next方法，每次调用next方法，都会使函数内的指针运行到下一个yield 语句。并且返回一个对象，对象上的value表示yield 后面的值，done表示遍历是否结束。return遍历的那次也是true

- yield用在表达式中必须放在括号中。
- yield如果在赋值运算符右边则不用。
- next还可以传递参数，确定yield表达式的返回值，不过需要从第二次开始传递

```javascript 
function* Generator(){
    yield 1;
    yield b = (yield 5) + (yield 3);
}
var gen = Generator();
console.log(gen.next()) // 1
console.log(gen.next(0))// 5 
console.log(gen.next(5))// 3
console.log(gen.next(1))// 6
```

Generator函数的异步操作。

Gnnerator函数配合Co模块使用可以优雅的解决异步问题。

### promise对象

异步最原始的解决方案是回调嵌套，这样会造成回调地狱，成为回调金字塔（噫吁嚱，危乎高哉），极其不易维护。然后社区提出了promise异步解决方案，ES6将其写入标准。

promise对象有三个状态，pending、resolve、reject，promise对象可以调用then方法，当这个promise对象状态发生变化的时候，then方法中的回掉函数就会执行。then方法执行会返回一个新的promise对象。这个新的promise对象还可以调用then方法。他的状态由then方法回掉函数的返回值决定，如果then的回掉函数报错，那么这个promise对象的状态就是失败，如果返回的不是一个promise对象，那么他的状态就会立即变成成功。如果返回的是promise对象，那么他的状态就由返回的promise对象的状态决定。如果有多个异步任务需要处理，并且他们相互依赖的话，那么就可以把每次异步需要处理的代码依次写在then函数中。这种写法比回掉嵌套可简洁多了。

Promise实例上有 then、catch方法，函数上有all、race、reject、reslove方法。

- catch 一旦promise对象的状态变为reject，那么就会执行catch中的回调函数。
- all 可以接受一个数组当参数，数组是由promise对象构成，只有当数组中所有的promise对象状态都变为resolve，那么说这个promise对象的状态才会变为resolve。

### Async与Await

异步终极解决方案，最为优雅的解决方案。其实async和await就是Generator函数的的语法糖，就是把*号变成async把yield变成await。但是async和await比gennrator函数更为强大。

相比与Gennerator函数的优势。

- 内置执行器，不再需要co模块。
- 与Gennerator函数返回遍历器对象相比他直接返回promise对象。
- 具有更好的语义。

async函数中的await会一直等，等到后面的promise对象状态变为resolve，函数才会向下执行。async函数返回的promise对象的状态必须等到内部所有promise对象变为resolve状态时他才会变成resolve状态，如果有一个变成reject状态，那它就是reject状态了。

async函数的麻烦点在于错误处理， 因为如果有一个await后面的promise 对象的状态变成reject的话，那么其他await后面的异步处理结果都不能输出。可以给每个await语句加上try...catch

#### [async/await好文](async/await好文)

 