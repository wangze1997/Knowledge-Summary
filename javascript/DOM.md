## 	DOM

DOM(Document  Object  Model) 定义了表示和修改文档所需的对象，DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和css功能的一类对象的集合。

#####  DOM元素的选取方法

1. document.getElementById()
2. document.getElementByClassName()
3. document.getElementByTagName()
4. document.getElementByName()
5. document.querySelector()
6. document.querySelectAll()

##### DOM元素遍历方法

parentElement()  parentNode()  children()  childNodes()  firstElementChild() firstChild() 			l       lastElementChild() lastChild() previousSibling()  previousElementSibling() nextSibling()  nextElementSilbling()

##### DOM元素增删改插

- 增 createElement() createTextNode() createComment()
- 删 remove() removeChild()
- 该 replaceChild(new,origin)
- 插 insertBefore() appendChild()

##### Element节点的一些属性与方法

className classList id。

innerHTML innerText  区别   赋值都一样,会清空元素内容再赋值。取值时innerText自取元素内文本内容,innerHTML会把子标签一并取出。

Attributes() getAttribute() setAttribute() removeAttribute() hasAttibute() 他们都可以设置或获取非固有属性。

nodeName nodeValue nodeType（1、2、3、8、9） 

offsetLeft offsetTop offsetWidth offsetHeight offsetparent 这些属性只可读不可写,返回的是数值。

offsetWidth 为元素的width+元素的padding+边框的宽度

dom.style 只能获取设置在行间样式的属性与方法,即可读也可写,返回的是字符串.

offsetLeft 元素的左外边框至最近定位元素（offsetParent）的左内边框之间的像素距离，如果一直没有的话就是body。而body就是相对于margin最外侧。总有些隐式规则让你头疼。

##### 封装一些dom方法

- 封装insertAfter()使其作用相似与insertBefore()，把某A元素插入到B元素后面只需把A元素插入到B元素下一个元素的前面。

```javascript
 Element.prototype.insertAfter = function (ele,preElement){
       	 var nextEle = preElement.nextElementSibling;
      	 if(!nextEle){
             	 preElement.parentElement.appendChild(ele);
         }else{
	             preElement.parentElement.insertBefore(ele,nextEle);
	     }
}
```

- 封装获取class类名的方法（不使用原生方法）

```javascript
function trimStr (dom){
    var reg = /\s+/g
    str = dom.className.replace(reg," ");
    return str;
}
function getClassDom(strClass){
    var doms = document.getElementsByTagName("*");
    var domArr = [...doms];
    var newArr = []
    domArr.forEach(function(ele){
        let str = trimStr(ele).trim();
        let strArr = str.split(" ");
        strArr.forEach(function(item){
            if(item == strClass){
                newArr.push(ele)
            }
        })
    })
    return newArr;
}
```

### 节点继承关系

![](https://img-blog.csdn.net/20180801162810883?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dhb3NoYW55YW5nemhpXzE5OTk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

dom元素对象与document对象之间就是典型的原型链继承。

document对象由HTMLDocument函数构造产生，HTMLDocument的prototype中的proto又指向Document函数的原型。

#### 典型说明原型链的关系的就是dom了

不同元素由不同的构造函数产生，比如过div元素由HTMLDIVElement函数构造产生，ul由HTMLULElement函数构造产生。而所有dom元素构造函数的prototype中的proto对象又指向HTMLElement的prototype，HTMLElement函数的prototype中的proto又指向Element函数的prototype。Element函数的prototype的proto又指向Node的prototype。所以说每个dom元素的终端就是Element的prototype中的proto

总结来说：dom元素的每一层proto都对应某个函数的prototype，所以不论在那个函数的prototype上添加属性都可以直接受益到dom元素身上。

所有dom元素的第二层proto都是指向一个空间的