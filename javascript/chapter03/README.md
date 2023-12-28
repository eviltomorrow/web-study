---
title: 类型、值和变量
catalog: true
date: 2023-12-28 10:00:00
subtitle:
tags:
    - Web
    - Javascript
categories:
    - 技术
index_img: 
# banner_img: /img/bg/wallhaven-vqdmxm.png
---

# 类型、值和变量

1. JavaScript 的数觉类型分为两类：原始类型（primitive type）和对象类型（object type）。

> 原始类型：
> - 数字
> - 字符串
> - 布尔值
> - null（空）
> - undefined（未定义）

 null 和 undefined 通常分别代表了各自特殊类型的唯一的成员。

> 对象类型：
> - 除数字、字符串、布尔值、null 和 undefined 之外
> - 全局对象（global object）
> - “命名值”的无序集合
> - 数组
> - 函数
> - 类（Array、Function、RegExp、Date、Error）

 如果函数用来初始化（使用 new 运算符）一个新建的对象，我们称之为构造函数（constructor）。每个构造函数定义了一类（class）对象---由构造函数初始化的对象组成的集合。

2. JavaScript 解释器有自己的内存管理机制，可以自动对内存进行垃圾回收。

3. JavaScript 是一种面向对象的语言，数据类型本身可以定义方法来使用值。

JavaScript 对象、数字、字符串和布尔值可以拥有方法。null 和 undefined 是无法拥有方法的值。

4. JavaScript 可以自由地进行数据类型转换。灵活的类型转换规则对“判断相等”的定义亦有影响。

5. JavaScript 变量是无类型的（untyped）。变量可以被赋予任何类型的值，同样一个变量也可以重新赋予不同类型的值。

## 3.1 数字

JavaScript 不区分整数值和浮点数值。所有的数字均用浮点数值表示。最大值是 +/-1.7976931348623157x10e308，最小值 +/-5x10e-324。

整数范围 -9 007 199254 740 992 ~ 9 007 199 254 740 992（-2的53幂~2的53幂），包含边界值。如果使用超过此范围的整数，则将丢失精度。

数字直接量，在任何数字直接量前加负号（-）可以得到它们的负值。负号是一元求反运算符，并不是数字直接量语法的组成部分。

### 3.1.1 整型直接量
eg.
 - 0
 - 3
 - 100000
 - 0xff（十六进制）
 - 0xCAFE911（十六进制）
 - 0377（八进制）部分支持

### 3.1.2 浮点型直接量
eg.
 - 3.14
 - 2345.789
 - .33333
 - 6.02e23
 - 1.24233E-32

### 3.1.3 JavaScript 中的算数运算符
eg.
 - (+ , - , * , / , %)
 - Math.pow(2,10)  			// => 2的10幂
 - Math.round(.5)  			// => 1.0
 - Math.ceil(.6)   			// => 1.0
 - Math.floor(.6)  			// => 0.0
 - Math.abs(-5)    			// => 5
 - Math.max(x,y,z)
 - Math.min(x,y,z)
 - Math.random()
 - Math.PI
 - Math.E 
 - Math.sqrt(3)
 - Math.pow(3, 1/3)
 - Math.sin(0)
 - Math.log(10)
 - Math.log(100)/Math.LN10
 - Math.log(512)/Math.LN2
 - Math.exp(3)				// => e 的3次幂

> JavaScript 中的算术运算在溢出（overlfow）、下溢（underflow）或被零整除时不会报错。
 - 上溢的结果，会返回无穷大，infinity 或 -infinity
 - 下溢的结果，会返回 0 或 -0
 - 被 0 整除，会返回 infinity 或 -infinity
 - 0 除以 0，无穷大除以无穷大，给任意负数开方，算数运算符与不是数字与无法转换为数字的操作数一起使用，都会返回 NaN

正无穷大
 - Infinity
 - Number.POSITIVE_INFINITY
 - 1/0
 - Number.MAX_VALUE+1

负无穷大
 - Number.NEGATIVE_INFINITY
 - Infinity
 - -1/0
 - Number.MAX_VALUE - 1

NaN
 - NaN
 - Number.NaN
 - 0/0

0
 - Number.MIN_VALUE/2

-0
 - -Number.MIN_VALUE/2
 - -1/Infinity
 - -0

JavaScript 中的非数字(NaN)有一点特殊：它和任何值都不相等，包括自身。 x!=x 和 isNaN(NaN或非数字值) 返回 true。

### 3.1.4 二进制浮点数和四舍五入错误

var x = .3-.2; var y = .2-.1; x == y; ==> false

原因在于二进制浮点数表示法。

### 3.1.5 日期和时间

JavaScript 语言核心包括 Date() 构造函数，用来创建表示日期和时间的对象。

## 3.2 文本

字符串（string）是一组由 16 位值组成的可变的有序序列，每个字符通常来自于 Unicode 字符集。字符串的长度（length）是其所包含的 16 位值的个数。

## 3.2.1 字符串直接量

在 JavaScript 程序中的字符串直接量，是由单引号或双引号括起来的字符序列。由单引号定界的字符串中可以包含双引号，由双引号定界的字符串中可以包含单引号。

例举：
 - ""
 - "testing"
 - "3.14"
 - 'name="myform"'
 - "Wouldn't you prefer O'Reilly's book?"
 - "This string\n hase two lines"
 - "one\
   long\
   line"

JavaScript 和 html 代码混用的时候，在 JavaScript 表达式中使用单引号表示字符串，在 HTML 事件处理程序属性中使用双引号。

<button onclick="alert('Thank you')">Click me</button>

### 3.2.2 转义字符

<略>

### 3.2.3 字符串的使用
eg.
 - msg = "Hello " + "world";
 - greeting = "Welcom to my blog, " + " " + name;
 - s.length;            // 计算字符串包含的 16 位值的个数。
 - s.charAt(0);
 - s.charAt(s.length-1);
 - s.substing(1,4);
 - s.slice(1,4);
 - s.slice(-3);
 - s.indexOf("l");
 - s.lastIndexOf("l");
 - s.indexOf("l",3);
 - s.split(",");
 - s.replace("h","H");
 - s.toUpperCase();

### 3.2.4 模式匹配

<略>

## 3.3 布尔值

任意 JavaScript 的值都可以转换为布尔值。

 - undefined
 - null
 - 0
 - -0
 - NaN
 - ""
 - false

 以上这些值都会被转换为 false，所有其他值，包括所有对象（数组）都会转成 true。

JavaScript 期望使用一个布尔值的时候，价值会被当成 false，真值会被当成 true。

## 3.4 null 和 undefined

null 是 JavaScript 语言的关键字，它表示一个特殊值，常用来描述“空值”。对 null 执行 typeof 预算，结果返回字符串“object”，可以将 null 认为是一个特殊的对象值，含义是“非对象”。但实际上，通常认为 null 是它自由类型的唯一一个成员。

## 3.5 全局对象

当 JavaScript 解释器启动时（或者任何 web 浏览器加载新页面的时候），它将创建一个新的全局对象，并给它一组定义的初始属性：

- 全局属性，比如 undefined、infinity、NaN
- 全局函数，比如 isNaN()、parseInt() 和 eval()
- 构造函数，比如 Date()、RegExp()、String()、Object()、Array()
- 全局对象, 比如 Math 和 JSON

## 3.6 包装对象

对于数字、字符串、布尔值，JavaScript 将会通过 new 构造函数() 的方式转换成对象，这个对象继承了相关方法，并被用来处理属性的引用。一旦属性引用结束，这个新创建的对象就会销毁。

 - new String();
 - new Number();
 - new Boolean();

```javascript
var a = "test";
var S = new String(a);
a == S;     // => true
a === S;    // => false
```