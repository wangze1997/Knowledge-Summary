# jQuery

> jquery是2006年1月公布的一个js框架。他算是javascript历史上的一个早期框架。

jquery的优势如下：

解放了原生操作dom的接口，提供简便的选择器选择dom元素。

有很多插件库，可以极大简化javascript的开发。

虽然现在很多复杂网站都使用组件化开发。但还是有很多网站依然需要他。



## 基础操作

### 1、$参数传递规则。

css selector（css选择器）、dom元素（根据选取规则选的）、null 、undefinde 、function(){}

如果第一个传id选择器，那他只会选择第一个dom。还可以填jquery函数执行产生的对象。

### 2、 jQuery基础操作方法。

- 选取dom相关的方法

first() last() eq() get() find() filter(function(index,ele){}) not(function(){}) has()

add() 集中操作，父子我可以一并选取  end() 回退操作

next() nextAll() prve() prveAll()  silbings() slice() parent() parents() children() ;

- 取赋值相关的方法

text(fn) html(function(index,ele){}) attr(x,y) removeAttr() prop("checked") removeProp() 

addClass(function(){})  removeClass(fn) hasClass() val(function(index,oldValue){})表单相关value值

- dom元素的增删改查

insertBefore()  before() insertAfter() after()都具有剪切操作，和原生一样，调用者与被调用者不同。在本元素前后插入同级元素，注意和原生的区别。

append() appendTo()  prepend() prependTo() 在本元素中插入子元素

remove() 事件也一并删除 detach() 事件还存在。 

wrap() wrapInner() clone() data() data数据是记忆在原生dom身上的

- 事件与动画

on(type，selector，data，fn) 第一个与第四个是必填，第2个参数优化了事件委托。限制必须由那个子元素触发。

one(type，fn) 事件只执行一次，然后就自动解除。

off(type，fn) 可不填，可只填第一个参数， 用jq绑定的事件必须用jq方法解除。怎么绑怎么解。

trigger(type) 代替事件执行。也可以触发自定义事件。 

$(window).scroll() 监听滑轮滚动事件。横向竖向都监听。

hide(duration,easing,fn) show() toggle() 后两个参数几乎不用。

fadeOut(duration,easing,fn) fadeIn() fadeToggle() fadeTo(duration,opcity,easing,fn)

sildeDowm(duration,easing,fn) sildeUp() sildeToggle()

animate(target,duration,easing,fn)

animate内部原理 queue dequeue clearqueue。如果一个dom元素有多个动画的话他会依次执行。

- 图形大小与位置坐标

width() height()  innerWidth() innerHeight() outerWidth(false/true) outerHeight(false/true)

offset() 仅考虑其到文档的距离，不管父级有没有定位。他就是获取或设置元素在文档中的位置，即使元素没设置定位也没关系。position(none)不能设置位置。返回的都是数值。就是获取元素身上的left与top值。

scrollTop(必须Number) scrollLeft() 

### 3、jquery工具方法

$.type() $.isFunction() $.isArray() $.isWindow() 判断数据类型 

$.trim(str) 消除左右两侧的空格

$.proxy(fn,obj) 改变this指向

$.noConflict() 防止命名冲突。 

$.each(arr,function(index,ele){}) 循环操作数组，返回原数组。

$.map(arr,function(index,ele){}) 循环操作数组，返回返回值的数组

$.parseJson()

$.makeArray() 把一个类数组转换成真数组。

jquery高级工具方法。

- $.extend()

扩展方法，$.extend(obj)，$.fn.extend(obj)

浅克隆，$(target,origin1,origin2.....) 

深克隆，$(true,target,origin1,origin2.....)

- $.ajax({url：请求地址，type：类型，data：参数信息（前后端协定好的，就要什么字段的内容），success：处理的回调函数，erroy：请求失败的处理函数，complate：不管失败或成功都会触发，context：改变回调函数中的上下文，async：true/false决定是否异步，基本都是异步，timeout：在规定时间内没请求成功，就不请求了，datatype：”jsonp“})
- $.Deferred() 返回一个对象，可定义一些代理。注册函数，监控状态。 
- $.Callbacks() 通过add注册多个函数，通过fire一并执行，Deferred内部原理就是用Callback



## 注意问题

jquery选出来的dom元素对象不会监控内部元素的变化，而原生通过document.getElementByClassName等选择出来的可以监控内部变化，如果删除了内部数组也发生变化。

$(".wrapper").remove()返回的依然是之前的对象，dom元素数量没变化。不过拿着引用也没用，元素都从dom树上消失了。

$(window).outerWidth()与$(window).outerHeight()可以获取文档的宽高。

$().ready()与onlode事件的区别：在于时间，一个是dom树构建完成触发，一个是等页面所有资源加载完成时触发。onload事件只能绑定一个，而ready事件可以绑定多个。

jquery2大等式（通过$函数执行所产生的jquery对象引用不同，但他们的原型引用地址都是相同的）

```javascript
window.$ = window.jQuery = jQuery
jQuery.prototype == jQuery.fn == jQuery.fn.init.prototype
```

