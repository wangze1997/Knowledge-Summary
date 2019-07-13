# 深搜与广搜

BFS

```
 <div class="parent">
        <div class="child-1">
            <div class="child-1-1">
                <div class="child-1-1-1"></div>
                <div class="child-1-1-2"></div>                
            </div>
            <div class="child-1-2"></div>            
        </div>
        <div class="child-2">
            <div class="child-2-1"></div>
        </div>
</div>
// 深度遍历,利用递归实现
function deepTree(dom){
	let arr = [];
	arr.push(dom)
	for(let i = 0,len = dom.chlidren.length; i < len; i++){
		arr.concat(deepTree(dom.children[i]))
	}
	return arr;
}
var div = document.getElementsByTagName("div")[0]
deepTree(div)
// 广度遍历，利用迭代方式
function iterTree(dom){
	let newArr = [],count = [];
	count.push(dom)
	while(count.length){
		let item = count.shift();
		newArr.push(item)
		for(var i = 0,len = item.children.length; i < item.children.length; i++){
				count.push(item.children[i])
		}
	}
	return newArr;
}
```

遍历上述节点树。