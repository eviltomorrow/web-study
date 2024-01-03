// 整型直接量
0
3
10000
0xff
0xCAFE011

// 显示类型转换
Number("3");
String(false);
Boolean([]);
Object(3);

var a = Object(null);
console.log(a);

var b = Object(undefined);
console.log(a);

var n = 17;
binary_string = n.toString(2);
octal_string = "0" + n.toString(8);
hex_string = "0x" + n.toString(16);

console.log(binary_string, ",", octal_string, ",", hex_string);

var n = 123456.789;
console.log(n.toFixed(0));
console.log(n.toFixed(2));
console.log(n.toFixed(5));
console.log(n.toExponential(1));
console.log(n.toExponential(3));
console.log(n.toPrecision(4));
console.log(n.toPrecision(7));
console.log(n.toPrecision(10));

console.log({"x":1, "y":2}.toString());
console.log([1,2,3].toString())
console.log({"x":1, "y":2}.valueOf());
console.log([1,2,3].valueOf());

var a = function(){

}
console.log(a.valueOf());