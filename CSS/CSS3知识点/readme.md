#    CSS3变化

### 选择器模式

- E + F 下一个满足条件的兄弟节点
- E ~ F 下面所有满足条件的兄弟节点

### CSS3新增选择器

- ::placeholder
- ::selection
- :root
- :not(选择器)
- :empty
- :target
- :first-child
- :last-child
- :only-child
- :nth-child(n)
- :first-of-type
- :last-of-type
- :nth-of-type(n)
- :only-of-type
- :checked

###  边框圆角

- border-radius (复合属性)
- border-top-left-radius:x y 
- border-top-right-radius:x y 
- border-buttom-left-radius:x y 
- border-buttom-right-radius:x y 

### 边框图片

- border-image
- border-image-source：url（）
- border-image-slice：必填（数值或百分比）
- border-image-outset：延伸效果
- border-image-repeat

### 阴影属性

- 盒子阴影
  - box-shadow（insert x y 模糊程度 放大程度 颜色值）
- 文字阴影
  - text-shadow（x，y，blur，color）

### 背景属性

- background-origin： border-box padding-box content-box
- background-clip： border-box padding-box content-box text
- background-attachment：scroll
- background-repeat：no-repeat repeat-x repeat-y  space/round 
- background-size：cover contain

###  渐变效果

- linear-gradient（角度，颜色...）
- radial-gradient（圆心位置，颜色...）

### 多列布局（column）

- columns：每列宽度 共几列
- column-gap：列间隙
- column-rule：间隔线，和border使用一样，必须有solid
- column-span：all（起到贯穿效果，定义到子容器身上）
- column-break-before：always（在子容器前选择断行，定义到子容器身上）
- column-break-after：always（在子容器后选择断行，定义到子容器身上）

### 过渡属性

不是所有属性都可以过渡，另外thansition只会监测自身元素属性的变化。

- tansition：property | duration | timing-function | delay
- tansition-property：all或具体属性名
- tansition-duration：定义过渡时间
- tansition-timing-function：定义过渡曲线、linear、ease、ease-in、ease-out 、ease-in-out
- tansition-delay：定义延迟时间

### 动画属性

第一帧的效果往往不能被保存。如果和后面几帧没有同名属性的话，那么他也会给后面帧属性提前做效果。所以每一帧尽量都定义同名属性。

- animation：name duration timing-function delay direction iterator-count
- animation-name：定义动画名称
- animation-duration：定义动画时间
- animation-timing-function：定义速度曲线（根据每一段而定，并非整体）
- animation-delay：定义动画延迟
- animation-direction：定义运动方向（reverse alternate alternate-reverse）
- anmiation-paly-state：可暂停动画
- anmiation-fill-mode：（none forwards backwards both）

Step的用法，以跳转的形式完成动画，step（数值控制节奏快慢，end/start）

end：保留当前帧的状态，直到这一阶段动画结束。start：保留下一帧的状态，直到这一阶段动画结束。

### 变换属性

- perspective：加在父级元素身上，底层原理是投影
- perspective-origin：眼睛所在位置

- transform
- transform-origin：变换中心
- transform-style：是否3d旋转
- rotate：2d效果
- rotatex：2d情况下效果不明显
- rotatey
- rotatez
- rotate3d（x，y，z，deg）：根据3值的比列确定空间轴。
- scale（x，y）：可以叠加操作，会从中心点缩放
- scalex：
- scaley：
- scalez：旋转之后才有效果
- scale3d（x，y，z）：前三个值的叠加
- skew（x，y）：倾斜效果，倾斜过后坐标长度会有变化 
- skewx
- skewy
- translatex
- translatey
- translate
- translatez
- translate3d

### 贝塞尔曲线

- ease ease-in ease-in-out ease-out 底层都是用贝赛尔曲线完成的

