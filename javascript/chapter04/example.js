// 数组表达式

[];
var a = [1+2,4,5,];
for (var o in a){
    console.log(o, a[o]);
}
var b = [1,2,,,,,];
console.log(b.length);

var o = {x:1,y:{z:3}};
var a = [o, 4, [5, 6]];

console.log(o.x);
console.log(o.y.z);
console.log(o["x"]);
console.log(a["1"]);
console.log(a["2"][2]);
console.log(a[0].x);