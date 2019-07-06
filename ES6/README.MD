# ES6

> ES6是javascript历史上的一次重大变革，增加了很多新的API，弥补了之前语言的不足。于2015年6月正式发布。他的目标是，使javascript语言可以编写大型的应用程序，成为企业级开发语言。



### javascript与ecmascript的区别和联系

### let和const声明方式

### 解构赋值与扩展运算符

变量的解构赋值(左侧都是变量)

- 数组的解构赋值
- 对象的解构赋值
- 字符串的解构赋值
- 函数形参与实参的解构赋值

如果解构失败则返回undefined，可以指定默认值，但相对应的必须是undefind才会生效。如果赋值解构左侧有扩展运算符的话，那他必须要放在最后一位，否则报错。

扩展运算符的使用

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

- rest参数
- 参数默认值

- 箭头函数
  - 不能被new
  - 没有arguments
  - this是其定义环境时所在的this，一旦确定不能改变
  - 没有自己的作用域，借用的是上层作用域
  - 体内不能有yeild语句，不能当作generator函数

### 数组的扩展

在Array函数身上增加了Array.form与Array.of方法

- Array.form() 将一个类数组或者是部署有iterator接口的数据集合转化为真数组
- Array.of() 将里面的参数加入到一个真数组中，如果只有一个参数的话不是其长度

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
  - Object.setPropertyOf()
  - Object.getPropertyOf()
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

### Reflect

### Iterator和for...of循环

### Generator函数

### class类

### promise对象

### Async与Await

