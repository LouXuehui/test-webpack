let str = require("./a.js");

console.log("str: ", str);

require("./index.css");
require("./index.less");

//es6 语法
let fn = () => {
  console.log("哈哈哈");
};
fn();

//es7语法
// @log 类的装饰器
@log
class A {
  //new A() a = 1
  a = 1;
}

let a = new A();
console.log(a.a, "a");

function log(target) {
  console.log(target, "1111");
}
