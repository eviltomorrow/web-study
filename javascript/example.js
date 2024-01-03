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

