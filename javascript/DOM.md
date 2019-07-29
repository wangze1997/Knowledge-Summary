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

