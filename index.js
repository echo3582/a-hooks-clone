/**
 * 一、闭包
 * 
 * 闭包就是给函数创建私有变量的能力，比如下面这个例子，add函数的私有变量就是foo。
 * 外界可以通过它返回的函数来访问这个变量。
 * 
 */

const add = (function() {
    let foo = 1
    return function() {
        foo = foo + 1
        return foo
    }
})()

console.log(add())// 2
console.log(add())// 3
console.log(add())// 4
console.log(add())// 5
console.log(add())// 6
