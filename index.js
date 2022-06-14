/**
 * 二、模拟useState
 * 
 * 1.hooks通常是在函数组件里面使用，所以我们声明一个函数组件。
 * 2.告诉React怎样渲染这个函数组件
 * 3.把_val变量提到React模块顶层，使state不必是个函数
 * 
 */

const React = (function() {
    let _val
    function useState(initialVal) {
        let state = _val || initialVal
        const setState = newVal => _val = newVal
        return [state, setState]
    }
    function render(Component) {
        let C = Component()
        C.render()
        return C
    }
    return { useState, render }
})()

const Component = function() {
    const [count, setCount] = React.useState(1)
    return {
        render: () => console.log(count),
        click: () => setCount(count + 1)
    }
}

var App = React.render(Component) // 1
App.click() 

var App = React.render(Component) // 2
App.click()

var App = React.render(Component) // 3
App.click()