# Vue面试考点

### vue指令都有哪些？

v-pre 、v-cloak、v-once、v-html、v-text、v-if、v-else-if、v-else、v-show、v-on、v-bind、v-for、v-model

### v-model的使用

v-modle是用来实现双向数据绑定的，只能用在表单中，适用于（input、textarea、select）表单外不起作用。

### vue修饰符

[vue修饰符-很全面](https://segmentfault.com/a/1190000016786254)

- 表单修饰符 .trim  .number
- 事件修饰符 .stop .prevent .self .once

### mvc、mvp与mvvm

mvc（Model-Vivw-Controller）模型视图控制器，是最早的一个设计思想。vivw负责用户界面，controller负责业务逻辑，model负责数据存储。当用户在界面上操作后，vivw负责将用户信息传递到controller层。controller层完成业务逻辑后要求model层改变数据，model将新的数据发送到vivw层，用户得到反馈。整个过程都是单向的（vivw -> controller -> model ->  view）。

mvp（Model-Vivw-Presenter）mvp将mvc的controller层改为persenter层，并且改变了通信方向。vivw和model不再进行通信。全都由presenter层做中转。各部分通信都是双向的。persenter层很雄厚，所有业务逻辑操作都在这里。

mvvm（ Model-View-ViewModel）mvvm和mvp几乎一样，只是将persenter层改为vivwmodel层。

### vue双向数据绑定的原理

### vue生命周期

vue生命周期可分为8个阶段，对应8个钩子函数。 

- 创建前后
  - beforeCreate 
  - created
- 挂载前后
- 数据更新前后
- 销毁前后

### 组件之间的通信

组件是vue中最为强大的功能之一，而组件中的作用域是相互独立的，要想组件之间可以通信就必须借助一些方法。