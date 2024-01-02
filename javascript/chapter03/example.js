// 整型直接量
0
3
10000
0xff
0xCAFE011

// 浮点型直接量
3.14
2345.789
.3333
6.02e23
1.4738E-32

// 算数运算
Infinity
Number.POSITIVE_INFINITY
1/0
Number.MAX_VALUE + 1
Number.NEGATIVE_INFINITY
-Infinity
-1/0
-Number.MAX_VALUE - 1
NaN
Number.NaN
0/0
Number.MIN_VALUE/2
-Number.MIN_VALUE/2
-1/Infinity
-0

// 类型转换
10 + " objects";
"7" * "4";
var n = 1 - "x";
n + " objects";

var o = {
    x: 1,
    y: 1,
};

console.log(o);
console.log(o.toString());

var i, sum;
var message = "hello";
var i = 0, j = 0, k = 0;

for (var i = 0; i < 10; i ++) {
    console.log(i);
}

for (var i = 0, j = 10; i < 10; i ++, j--) {
    console.log(i *j);
}

var attrs = [1,2,3,4];
for (var o in attrs) {
    console.log("this is " + o);
}

var scope = "global";
function checkscope(){
    var scope = "local";
    return scope;
}
console.log(checkscope());

scope = "global";
function checkscope2(){
    scope = "local";
    myscope = "local";
    return [scope, myscope];
}

console.log(typeof checkscope2());
console.log(scope);
console.log(myscope);

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function nested() {
        var scope = "nested scope";
        return scope;
    }
    return nested();
}
console.log(checkscope());

function test(o) {
    var i = 0;
    if (typeof o == "object") {
        var j = 0 ; 
        for (var k = 0; k < 10; k ++){
            console.log(k);
        }
        j ++;
        console.log(k);
    }
    console.log(j)
}
console.log(test(new Boolean(true)));

var scope = "global";
function f(){
    console.log(scope);
    var scope = "local";
    console.log(scope);
}
f();

var truevar = 1;
fakevar = 2;
this.fakevar2 = 3;
console.log(delete truevar);
console.log(delete fakevar);
console.log(delete this.fakevar2);