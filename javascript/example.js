// 变量
let message;
message = "Hello";
console.log(message);

let message2 = "Hello";
console.log(message2);

let user = 'John', age = 25, message3 = 'Hello';
let user1 = 'Shepard',
    age1 = 25,
    message4 = 'Hello';

let _ = 3;
let $ = 4;
let userName = 'Shepard';

// 常量
const myBirthday = '18.04.1990';
const COLOR_RED = "#F00";
// const pageLoadTime = /* no */;

// 动态类型
let message5 = "hello";
message = 123;

// Number 类型
let n = 123;
n = 12.234;

1 / 0; // => Infinity
Infinity;
"not a number" / 2; // => NaN
NaN;
// NaN 是粘性的，任何对 NaN 的进一步数学运算都会返回 NaN。
NaN + 1; // => NaN
// 例外
NaN ** 1; // => 1

/* 
脚本永远不会因为一个致命错误而停止运行。
*/

// BigInt 类型
// Number 类型无法存储大于或小于 +/-2**53-1 的整数。
// BigInt 用于表示任意长度的整数，表示为数字末尾 +n。

const bigInt = 1234567890123456789012345678901234567890n;

// String 类型
let str1 = "John";
let str2 = 'Single quotes are ok too';
let str3 = `can embed another ${str1}`;

// Boolean 类型
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;
console.log(isGreater);

// null 值
let age2 = null;
console.log(age2);
let age3;
age3 = undefined;
console.log(age3);

// typeof 运算符
typeof undefined;   // => undefined
typeof 0;       // => number
typeof 10n;     // => bigint
typeof true;    // => boolean
typeof 'foo';   // => string
typeof Symbol("id");    // => symbol
typeof Math;    // => object
typeof null;    // => object (历史遗留问题)
typeof alert;   // => function

// 类型转换

// 字符串转换
let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value, value);
value = String(null);
console.log(typeof value, value);
value = String(NaN);
console.log(typeof value, value);
value = String(undefined);
console.log(value);

// 数字型转型
console.log("6" / "2");
let str = "123";
console.log(typeof str);
str = Number(str);
console.log(typeof str, str);
/**
 * undefined    => NaN
 * null         => 0
 * true/false   => 1 and 0
 * string       => number/NaN
 */

// 布尔型转换
console.log(Boolean(1));
console.log(Boolean(0));
/**
 * 0, null, undefined, NaN, ""  => false 
 * 其他值                        => true
 * "0"," "                      => true
 */ 

8+2;
let str4 = "my" + " string";
console.log(str4);

console.log("1" + 2);       // => 12
console.log(2 + 2 + "1");   // => 41

let x = 1;
console.log(typeof +x);
x = true;
console.log(typeof +x);
x = "z";
console.log(typeof +x, +x);

let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(+apples + +oranges);
console.log(NaN + 1);