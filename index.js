/**
 * 二、模拟useState
 * 
 * 把useState放到一个React模块里面
 * 
 */

const React = (function() {
    function useState(initialVal) {
        let _val = initialVal
        let state = () => _val
        const setState = newVal => _val = newVal
        return [state, setState]
    }
    return { useState }
})()

const [count, setCount] = useState(1)
console.log(count()) // 1
setCount(2)
console.log(count()) // 2

