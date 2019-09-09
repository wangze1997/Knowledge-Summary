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

vue双向数据绑定是表单元素与vue中的数据进行的绑定，当一方发生变化的时候另一方也会发生变化。vue内部是通过defineProperty拦截data中相关数据的读和写的操作。当视图发生变化时，数据发生变化，数据发生变化时，视图变化。

[双向数据绑定](https://www.cnblogs.com/wangjiachen666/p/9883916.html)

### vue生命周期

vue生命周期可分为8个阶段，对应8个钩子函数。 就是其在创建、挂载、更新、销毁期间发生的事情。

- 创建前后
  - beforeCreate  实例刚从内存中创建出来，还没有初始化data和method属性。
  - created  数据data和method属性已经被初始化，此时还没有编译模板。
- 挂载前后
  - beforeMount  模板已经编译好，但是还没有挂载到页面。
  - mounted  此时已经把模板挂载到页面上了。
- 数据更新前后
  - beforeUpdate 状态更新之前执行此函数，此时data中的数据是最新的，页面还是老数据，因为还没有重新渲染。
  - updated 状态更新之后执行此函数，此时节点已经被重新渲染。
- 销毁前后
  - beforeDestroy 实例销毁前调用，此时实例依然可以使用。
  - destroy 实例销毁后调用，此时vue实例与他的子实例不能再使用，所有dom的监听事件已经解绑。

### 组件之间通信的方式

组件是vue中最为强大的功能之一，而组件中的作用域是相互独立的，要想组件之间可以通信就必须借助一些方法。