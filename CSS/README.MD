# CSS

> CSS（层叠样式表）CSS1.0发布于1996年12月，CSS2.0发布于1999年1月，CSS3.0体系于2005年左右起草，之后不断有有新的体系也就是新的属性加入到提案，然后各浏览器实现兼容。到现在CSS3.0还在完善。

### BFC

BFC（块级格式化上下文） BFC的元素是一块独立的渲染区域，他会根据自己的规则来渲染盒子。html元素就是最大bfc元素。

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

IFC（行内格式化上下文） 与BFC相比他的创建方式是被动的、隐式的。只有在一个区域内存在着可一行排列的元素才会生效。特性如下。IFC的线框（line-box）的高度由包含行内元素中高度最高的那个元素来计算的（不受垂直方向margin和padding的影响），所以有时父级设置line-height不管用。float元素会扰乱这一规则。

- 都可通过vertical-align设置其在 行内的对齐方式
- IFC内部元素按着从上到下从左到右的顺序依次排列
- 包含IFC元素区域的每一行会形成一行行框，别成为line box。
- 水平居中：当一个块要在一个环境中水平居中时，设置其为inline-block会产生额外的bfc，通过text-align：center可实现居中。
- 垂直居中： 创建一个IFC，用其一个子元素撑开父元素，设置其为vertical-align：middle，其他行内元素可以在此父元素下完成垂直居中。
- 如果给一个行内元素设置line-height的话，他会带动本行内所有元素的line-height和自己相同，一般只会给块元素，行级块元素设置line-height。

### Float

使一个元素浮动，元素脱离文档流但不会脱离文本流。自动浮到文本流的前方。并且会转换成block元素

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
- text-overflow
- word-spacing
- letter-spacing
- white-space

### CSS单位

1. px 绝对单位。传统上一个像素对应于计算机屏幕上的一个点，而对于高清屏则对应更多。
2. % 父元素宽度的比例。
   1. 如果对 html 元素设置 font-size 为百分比值，则是以浏览器默认的字体大小16px为参照计算的（所有浏览器的默认字体大小都为 16px），如62.5%即等于10px（62.5% * 16px = 10px）。
   2. 如果设置的是margin，width，padding的话是相对于父级宽度而言，如果设置的是height的话则是相对于父级高度而言。（border不能用%）
3. em 相对单位。 不同的属性有不同的参照值。
   1. 对于字体大小属性（font-size）来说，em 的计算方式是相对于父元素的字体大小
   2. border, width, height, padding, margin, line-height）在这些属性中，使用em单位的计算方式是参照该元素的 font-size，1em 等于该元素设置的字体大小。同理如果该元素没有设置，则一直向父级元素查找，直到找到，如果都没有设置大小，则使用浏览器默认的字体大小。
4. rem 是相对于根元素 html 的 font-size 来计算的，所以其参照物是固定的。但规定1rem的最小值是12px
   1. 好处：rem 只需要修改 html 的 font-size 值即可达到全部的修改，即所谓的牵一发而动全身。
5. vw, vh, vmin, vmax 相对单位，是基于视窗大小（浏览器用来显示内容的区域大小）来计算的。
   1. vw：基于视窗的宽度计算，1vw 等于视窗宽度的百分之一
   2. vh：基于视窗的高度计算，1vh 等于视窗高度的百分之一
   3. vmin：基于vw和vh中的最小值来计算，1vmin 等于最小值的百分之一
   4. vmax：   的最大值来计算，1vmax 等于最大值的百分之一
6. line-height设置%，em，或者倍数都是相对于本身或父级的字体大小而言。

### CSS预处理器

常见的css预处理器有sass、less。[sass基础教程](http://www.ruanyifeng.com/blog/2012/06/sass.html)

提供了许多便利的写法，大大节省了设计者的时间。使css模块化。

减少冗余代码，提高代码的复用性。

### Position的值有哪些？

- static 默认不定位
- absolute 相对于最近父级有定位的元素进行定位，没有的话相对于文档进行定位（父级边框内侧）
- relative 保留原来的位置，相对于自身进行定位。
- fixed 相对于文档进行定位，固定在文档中，不随滚动条的滚动而滚动吗
- sticky 粘性定位，固定定位和相对定位的结合体，当页面滚动到元素上边界到浏览器顶部时就固定在哪里。

### overflow的值都有哪些？

- visible 默认溢出容器可见
- hidden 溢出容器隐藏
- scroll 不论溢不溢出容器都出现滚动条
- auto 溢出容器出现滚动条，不溢出不出现

### @import与link的区别

- link是CSS标签，后者是样式，引入样式功能。
- @import是CSS2.1引入的，兼容性比较差
- link支持并行加载，@import是串行加载
- link支持使用javascript控制DOM去改变样式，而@import不支持

### 重绘与重排

重绘（repaint）页面渲染完成后，如果在改变元素的背景颜色，边框颜色，文字颜色，那么他只会引起元素的重新绘制，不会影响布局，他对性能的影响比较小。

重排（reflow）页面渲染完成后，如果改变元素的宽高，字体大小那么就会触发页面的重排，他会使页面重新布局，非常消耗性能。

优化：在后续改变dom样式的时候，不用dom.style的形式改变，通过改变class类名的形式改变dom样式。因为一次重绘或重排总比多次重绘或重排好。

### 行级块元素基线问题

vertical-align与line-height是css中最难理解的2个属性。vertical-align就是设置行内元素在这一行的排列方式，顶对齐，中对其，底对其，还是基线对齐，默认行内所有元素都是相对于基线对其。官方给的定义基线位置就是小写字母x的下边缘。

理解行框与行内框。行内每个内联元素占据的高度就是行内框。行框高度是由行内最高元素的顶部和最低元素的底部之差确定的。行框的基线位置就是该行框中x字母的下边缘，前提是他没有被包裹在别的行内元素中。

- 如果元素内部没有内联元素，则该元素基线就是该元素下边缘；
- 如果元素内部还有内联元素，则其基线就是内部最后一行内联元素的基线。

- 如果元素设置了`overflow`为`hidden auto scroll`，则其基线就是该元素下边缘；

### 文本分隔符

文本分隔符是由文本类元素或者文本之间有空格产生的，另外如果文本类元素或者文本左右两侧没有文本和文本类元素的话，即使有再多的空格的话都不会产生文本分隔符。另外文本分隔符不受左右两侧margin的影响。

### 对于line-height的理解

- 行高是指两条基线之间的距离
- 父元素没设置高度时内容是由行高撑开的
- 如果给父元素和子元素都设置行高，那么真正作用在内联元素上的行高值取最大的那个。（大值特性）
- line-height决定了一行的最小高度，因为如果内联元素过高的话，就会把行高撑开。

### 深入理解margin合并与margin塌陷

- 只有块元素才会产生margin合并或margin塌陷。
- 只发生在垂直方向上。
- 如果有两个相邻的块级元素，一个设置了margin-top一个设置了margin-bottom，那么就会取他们两个中最大的那一个为准。解决方式如下：
  - 给一个块元素加一层块级结构，触发其bfc规则。
- 另外就是父级元素和他的第一个/最后一个子元素。如果第一个子元素设置margin-top，父元素设置margin-top，那么取他们的最大值。如果最后一个子元素设置margin-bottom，父元素也设置margin-bottom的话，也会取最大的那个值。解决方式如下：
  - 对于margin-top的塌陷
    - 给父元素加上border-top或者padding-top
    - 触发父级bfc规则
  - 对于margin-bottom的塌陷
    - 给父元素加上高度
    - 给父元素加上border-bottom或padding-bottom
    - 触发父级bfc规则。
- 空块元素自身的margin合并，就是这个块元素没任何内容，也没有设置padding和border，那么他的margin-top和margin-bottom会合并在一起。解决方式如下：
  - 设置高度，设置垂直方向上的padding和border值。