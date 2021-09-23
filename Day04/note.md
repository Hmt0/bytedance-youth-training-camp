### 视口

#### `viewport`概念：

新建一个`html`文件时，模板中的`viewport`元标签一般长这个样子：

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

`viewport`是网页默认的宽度和高度，上面这行代码的意思是，网页宽度默认等于屏幕宽度（width=device-width），原始缩放比例（initial-scale=1）为1.0，即网页初始大小占屏幕面积的100%。

所以为了能在移动设备上正常显示那些传统的为桌面浏览器设计的网站，移动设备上的浏览器都会把自己默认的`viewport`设为`980px`或`1024px`（也可能是其它值，这个是由设备自己决定的），但带来的后果就是浏览器会出现横向滚动条，因为浏览器可视区域的宽度是比这个默认的`viewport`的宽度要小的。

#### 像素比 d`devicePixelRatio`

```javascript
console.log(window.devicePixelRatio) // 2.0000000298023224
```

`iPhone7`的分辨率是`1334x750`(物理)像素。

`CSS`像素是667×375

原因：在Retina屏的`iphone`上，`devicePixelRatio`的值为2，也就是说1个`CSS`像素相当于2个物理像素

像素比：原先`1px`的内容。放大到`devicePixelRatio px`显示

### 适配

百分比局限性：受父级元素限制

过渡方案：

`em`：继承

`rem`：1 rem = 1 root(`html`) font-size

目前：`vw`，`vh`

### 媒体查询

`min-width max-width`应用于文字等细节

### 移动端事件

#### node服务器 

安装：npm install anywhere -g
运行：anywhere

?transform和position：absolute有啥区别

1：37