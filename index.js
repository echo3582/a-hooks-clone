/**
 * 二、模拟useState
 * 
 * 把state修改成一个函数可以解决之前的问题，访问变量的时候需要调用函数，本例就是count()
 * 
 */

function useState(initialVal) {
    let _val = initialVal
    let state = () => _val
    const setState = newVal => _val = newVal
    return [state, setState]
}

const [count, setCount] = useState(1)
console.log(count()) // 1
setCount(2)
console.log(count()) // 2

