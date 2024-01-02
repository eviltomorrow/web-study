---
title: 表达式和运算符
catalog: true
date: 2024-01-02 21:20:00
subtitle:
tags:
    - Web
    - Javascript
categories:
    - 技术
index_img: 
# banner_img: /img/bg/wallhaven-vqdmxm.png
---

# 表达式和运算符

表达式（expression）JavaScript 中的一个短语，JavaScript 解释器会将其计算（evaluate）出一个结果。

## 4.1 原始表达式

原始表达式时表达式中的最小单位。包含常量或直接量、关键字、变量。

1、直接量是直接在程序中出现的常数值：
```javascript
1.23
"hello"
/pattern/
```

2、保留字构成原始表达式：
```js
true
false
null
this
```

3、变量组成原始表达式：
```js
i
sum
undefined
```

## 4.2 对象和数组的初始化表达式

对象和数组初始化表达式实际上是一个新创建的对象和数组。有时被称为“对象直接量”或“数组直接量”

1、数组初始化表达式是通过一对方括号和其内由逗号隔开的列表构成的。
```js
[]
[1+2,3+4]
var matrix = [[1,2,3],[4,5,6]];
var sparseArray = [1,,,,5];
```
> 注意:  
> 1、数组直接量中的列表逗号之间的元素可以省略，省略的空位会填充值 undefined。
> 2、数组直接量中的元素列表结尾处可以留下单个逗号，这时并不会创建一个新的 undefined 元素。

2、对象初始化表达式和数组初始化表达式非常类似，只是方括号被花括号代替，并且每个子表达式都包含一个属性名和一个冒号作为前缀：
```js
var p = {x: 2.3, y:-1.2};
var q = {};
q.x = 2.3; q.y = -1.2;
```

对象直接量可以嵌套，属性名称可以是字符串而不是标志符。
```js
var rectangle = {
    upperLeft: {x:2 ,y:2},
    lowerRight: {x: 4, y:5}
};

var side = 1;
var rectangle = {
    "upperLeft": {x: p.x, y: p.y},
    'lowerRight': {x: p.x + side}
};
```

## 4.3 函数定义表达式

函数定义表达式包含关键字 function，跟随其后的是一对圆括号，括号内是一个以逗号分割的列表，列表含有 0 个或多个标志符（参数名），然后再跟随一个由花括号包裹的 JavaScript 代码段。
```js
var square = function(x) {
    return x * x;
}
```

## 4.4 属性访问表达式