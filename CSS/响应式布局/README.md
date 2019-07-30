## 响应式布局解决方案

### 媒体查询

媒体查询的引入方式

- `link rel="stylesheet" media="screen and (max-width:375px)" href="index.css"`
- `@import “index.css” screen and (max-width:375px)`
- `@media screen and (max-wdith:375px)`

媒体查询不占用权重，一般放在最下面，但如果上面权重高的话，依然会作用于上面。

