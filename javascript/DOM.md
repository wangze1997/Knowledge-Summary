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

innerHTML innerText  区别   赋值都一样,会清空元素内容再赋值。取值时innerText自取元素内文本内容,innerHTML会把子标签一并取出。

Attributes() getAttribute() setAttribute() removeAttribute() replaceAttibute()

offsetLeft offsetTop offsetWidth offsetHeight  这些属性只可读不可写,返回的是数值。

dom.style 只能获取设置在行间样式的属性与方法,即可读也可写,返回的是字符串.

##### 封装一些dom方法

- 封装insertAfter()使其作用相似与insertBefore()

  把某A元素插入到B元素后面只需把A元素插入到B元素下一个元素的前面。

  ```
   Element.prototype.insertAfter = function (ele,preElement){
         	 var nextEle = preElement.nextElementSibling;
        	 if(!nextEle){
               	 preElement.parentElement.appendChild(ele);
           }else{
  	             preElement.parentElement.insertBefore(ele,nextEle);
  	     }
  }
  ```
  
  

