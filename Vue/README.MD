# Vue面试考点

### vue指令都有哪些？

v-pre 、v-cloak、v-once、v-html、v-text、v-if、v-else-if、v-else、v-show、v-on、v-bind、v-for、v-model、v-slot

### v-model的使用

v-modle是用来实现双向数据绑定的，只能用在表单中，适用于（input、textarea、select）表单外不起作用。

### v-show与v-if的区别

v-show与v-if的主要区别在于是否被渲染，v-show不论展示或隐藏都会被渲染，只是改变了display的值。而v-if只要不为真那么他就不会渲染这个dom元素，直到这个if条件为真他才会渲染。

### vue自定义指令

自定义指令（redirect）可以分为全局自定义指令和组件内自定义指令。首先指令函数在dom挂载完时会执行一次，以后只要组件视图发生变化，那么指令函数就会执行。指令函数可接受3个参数分别是dom元素，bindings，虚拟节点。

### vue修饰符

[vue修饰符-很全面](https://segmentfault.com/a/1190000016786254)

- 表单修饰符 .trim  .number .lazy
- 事件修饰符 .stop .prevent .self .once .native

### mvc、mvp与mvvm

mvc（Model-Vivw-Controller）模型视图控制器，是最早的一个设计思想。vivw负责用户界面，controller负责业务逻辑，model负责数据存储。当用户在界面上操作后，vivw负责将用户信息传递到controller层。controller层完成业务逻辑后要求model层改变数据，model将新的数据发送到vivw层，用户得到反馈。整个过程都是单向的（vivw -> controller -> model ->  view）。

mvp（Model-Vivw-Presenter）mvp将mvc的controller层改为persenter层，并且改变了通信方向。vivw和model不再进行通信。全都由presenter层做中转。各部分通信都是双向的。persenter层很雄厚，所有业务逻辑操作都在这里。

mvvm（ Model-View-ViewModel）mvvm和mvp几乎一样，只是将persenter层改为vivwmodel层。

### vue双向数据绑定的原理

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。视图得到更新。

[双向数据绑定](https://www.cnblogs.com/wangjiachen666/p/9883916.html)

### vue生命周期

vue生命周期可分为8个阶段，对应8个钩子函数。 就是其在创建、挂载、更新、销毁期间发生的事情。

- 创建前后
  - beforeCreate  实例刚从内存中创建出来，还没有初始化data和method属性。
  - created  数据data和method属性已经被初始化，此时还没有编译模板（未构建vdom）。
- 挂载前后
  - beforeMount  模板已经编译好，但是还没有挂载到页面（vdom构建完成）。
  - mounted  此时已经把模板挂载到页面上了。
- 数据更新前后
  - beforeUpdate 状态更新之前执行此函数，此时data中的数据是最新的，页面还是老数据，因为还没有重新渲染。
  - updated 状态更新之后执行此函数，此时节点已经被重新渲染。
- 销毁前后
  - beforeDestroy 实例销毁前调用，此时实例依然可以使用。
  - destroy 实例销毁后调用，此时vue实例与他的子实例不能再使用，所有dom的监听事件已经解绑。

### vue单向数据流。

### 组件之间通信的方式

组件是vue中最为强大的功能之一，而组件中的作用域是相互独立的，要想组件之间可以通信就必须借助一些方法。

父组件向子组件传递数据的方式。

- 父组件向子组件传递数据，子组件可以通过props来接受。

- 祖父组件向孙组件传递数据，可以通过$attrs。

- 子组件可以通过$parent拿父组件的数据。

- 父组件可以通过定义provide数据，子组件通过inject接收父组件provide中的数据。

子组件向父组件传递数据的方式。

- 父组件可以通过$childern拿子组件的数据。（不建议用）
- 父组件可以通过$refs拿子组件的数据，只需要在子组件身上定义ref属性。

- 通过$emit可以主动触发一种事件类型的函数。可以在emit函数的参数中向父组件事件函数传参。

### 计算属性与监听属性watch

计算属性和普通方法的主要区别：如果视图数据发生变化的话，那么普通方法都会执行，而计算属性只有当监听的数据发生改变的话，他才会执行。计算属性可以做缓存，如果相关数据没有改变的话，他只执行一次，多次访问访问计算属性，那么他就会取缓存。methods只要数据发生变化，那么函数就会执行。

计算属性和监听器他们的侧重点不同，计算属性监听的是依赖值，只要依赖值不变，那他只会取缓存。监听器监听的是属性值，只要属性值发生变化，那么相关函数就会执行。计算属性中无法执行异步操作。监听器中可以执行异步操作。

### vue路由（router） 

路由分前端路由和后端路由，前端路由在页面跳转时不会刷新，后端会发生刷新。

路由跳转：在router-link中添to属性，写上跳转的地址，里面的地址和router.js配置的path属性一致。

嵌套路由：在路由配置中，加一个children属性，children是个数组，里面可以定义他的子路由的个数与他们的配置。

导航守卫：导航守卫可分为路由独享守卫、组件内守卫和全局守卫，独享守卫定义在router.js中相应路由的配置中，全局守卫的话只定义一次那么所有的路由都可以被守卫。导航守卫有多方法只有方法中的next函数执行，他才会放你过来。导航守卫有很多处理函数。导航守卫的顺序是先全局再独享最后组件内。

- 全局守卫: beforeEach beforeResolve afterEach
- 路由独享守卫: beforeEnter
- 组建内守卫：beforeRouterEnter beforeRouterUpdata beforeRouterLeave 

beforeEach => beforeEnter => beforeRouterEnter => afterEach 

动态路由：如果说一个路由可以跳转到很多页面，那么给他配置子路由的个数就会很多，不宜这样做，此时可以给路由配置动态路由，让他根据后面的参数选择地址，进行跳转。

路由元信息：在路由配置信息上写上meta属性，定义这个路由的有关信息。

### vue中axios的使用

axios可用于浏览器，也可以用于node环境中，也就是他既可以在前端使用，也可以在后端使用。他的优点有很多，可以拦截和取消请求，支持promiseAPI，可以防御xsrf攻击。

### vuex的使用

vuex状态管理，他有5个属性：state、getters、mutations、actions、modules 

- state 定义了store中的原始数据。
- getters 可以从store中获取数据，类似于computed属性。
- mutations 用于修改store中的数据，但必须是同步修改。
- actions 用于提交 mutations，可以包含异步操作。
- modules  允许将单一的store分割成多个store，需要注意的时state放在模块下，其他的放在全局。

vuex类似于一仓库，里面存储着数据，所有组件都可以从这个仓库中拿取数据。