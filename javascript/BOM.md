## BOM

BOM(Browser Object Model)  描述了与浏览器进行交互的接口,可以对浏览器进行访问与操作。强大到可以操作浏览器。他没有标准化组织。

#### BOM组成

Window javascript顶层对象,代表浏览器窗口

Histroy  包含浏览器窗口访问过的url

Navgator 包含了浏览器客户端的一些信息

Screen 包含了浏览器显示屏的一些相关信息

Location 包含了当前url的一些信息

##### window

| 属性            | 属性的具体描述                           |
| --------------- | ---------------------------------------- |
| sccrenX sccrenY | 声明了浏览器左上角距离电脑屏幕的x，y坐标 |
| parent          | 返回父窗体(iframe)                       |
| top             | 返回最顶层的先辈窗口                     |
| self            | 加了一个自己的引用，也就是window自身     |
| name            | 设置或返回窗口的名称。                   |
| alter()         | 弹出警告框                               |
| propmt()        | 弹出输入框                               |
| confirm()       | 弹出确认框                               |

##### Navgator

| appName     | 返回浏览器的名称。             |      |
| ----------- | ------------------------------ | ---- |
| appVersion  | 返回浏览器的平台和版本信息。   |      |
| appCodeName | 返回浏览器的代码名。           |      |
| platform    | 返回运行浏览器的操作系统平台。 |      |
| cpuClass    | 返回浏览器系统的 CPU 等级。    |      |

##### History

| length    | 返回浏览器历史列表中的 URL 数量。   |
| --------- | ----------------------------------- |
| back()    | 加载 history 列表中的前一个 URL。   |
| forward() | 加载 history 列表中的下一个 URL。   |
| go()      | 加载 history 列表中的某个具体页面。 |

##### Location

| host     | 设置或返回主机名和当前 URL 的端口号。 |
| -------- | ------------------------------------- |
| href     | 设置或返回完整的 URL。                |
| port     | 设置或返回当前 URL 的端口号。         |
| protocol | 设置或返回当前 URL 的协议。           |
| hostname | 设置或返回当前 URL 的主机名(服务器名) |
| pathname | 设置或返回当前 URL 的路径部分。       |

##### Screen

| availHeight | 返回显示屏幕的高度(除 Windows 任务栏之外)。  |
| ----------- | -------------------------------------------- |
| availWidth  | 返回显示屏幕的宽度 (除 Windows 任务栏之外)。 |
| deviceXDPI  | 返回显示屏幕的每英寸水平点数。（仅 IE 支持） |
| deviceYDPI  | 返回显示屏幕的每英寸垂直点数。（仅 IE 支持） |
| colorDepth  | 返回目标设备或缓冲器上的调色板的比特深度。   |

