## 响应式布局解决方案

### 媒体查询

媒体查询的引入方式

- `link rel="stylesheet" media="screen and (max-width:375px)" href="index.css"`
- `@import “index.css” screen and (max-width:375px)`
- `@media screen and (max-wdith:375px)`

#### 用法：

- 使用and（2）可以精确的划分一个区域。
- 使用逗号运算符的话（相当于or），他可以使一套样式作用与多个被选择的宽度区域
- 媒体查询不占用权重，一般放在最下面，但如果上面权重高的话，依然会作用于上面。。