# CSS

> CSS（层叠样式表）CSS1.0发布于1996年12月，CSS2.0发布于1999年1月，CSS3.0体系于2005年左右起草，之后不断有有新的体系也就是新的属性加入到提案，然后各浏览器实现兼容。到现在CSS3.0还在完善。



### BFC

**BFC（块级格式化上下文） BFC的元素是一块独立的渲染区域，他会根据自己的规则来渲染盒子。**

- 触发条件
  - display：inline-block或table-cell
  - position：absolute或fixed
  - float：left/right
  - overflow：不为visible
- 布局规则
  - 计算盒子高度浮动元素也参与计算
  - 2个BFC区域不会发生重叠
  - 区域内部的盒子在垂直方向一个接一个的排列
- 作用
  - 清除内部浮动（使父元素成为BFC元素）
  - 解决margin塌陷和margin合并

### IFC

**IFC（行内格式化上下文） 与BFC相比他的创建方式是被动的、隐式的。只有在一个区域内存在着可一行排列的元素才会生效。特性如下。**

- 都可通过vertical-align设置其在 行内的对齐方式
- IFC内部元素按着从上到下从左到右的顺序依次排列
- 包含IFC元素区域的每一行会形成一行行框，别成为line box

### Float

**使一个元素浮动，元素脱离文档流但不会脱离文本流。**

对自己来说：会形成块，独立负责自己区域的渲染

对父元素来说：会看不见他，导致高度塌陷

对兄弟元素来讲：块级元素元素看不见他所有文本类元素、bfc元素、文本可以看见。每个float元素都紧挨着。

**怎样清除浮动**

- 利用伪元素
- 手动给父元素设置高度
- 触发父元素bfc规则
- 在父元素的最后添加最后一个子元素设置clear：both



### css选择器权重

- important +00 
- 行间 1000
- id 100
- class 属性 伪类 10
- 伪元素 标签 1
- 通配符 0

### 说你下你知道的伪类选择器

- :link 选择未访问过的链接
- :visited 选择已访问过的链接
- :hover 选择鼠标移动上去
- :active 选择活动链接
- :first-child 选择第一个子元素
- last-child 选择最后一个子元素
- nth-child() 选择第n个子元素
- first-of-type 选择与父元素类型相同的第一个子元素
- last-of-type 选择与父类型相同的最后一个子元素
- nth-of-type() 选择与父类型相同的第n个子元素
- :root 选择根元素
- :empty 选择空元素

### CSS可以继承的元素有哪些

**一般文本类、字体类以及颜色都可以继承**

- color
- visibility
- line-height
- font-weight
- font-style
- font-family
- font-size
- text-align
- text-indent
- text-shadow
- word-spacing
- letter-spacing
- white-space

### CSS3新特性

- 边框圆角 border-radius
- 径向渐变与线性渐变 linear-gradient
- 盒子阴影与文字阴影 text-shadow box-shadow
- 颜色透明度 color: rgba(255, 0, 0, 0.75);
- 文字溢出 text-overflow:ellipsis
- 边框效果 border-image
- 媒体查询 
- flex布局与网格布局
- 动画 animation
- 过渡 transition
- 变换 transform