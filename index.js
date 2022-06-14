/**
 * 二、模拟useState
 * 
 * 输出不符合预期，因为setState并没有修改state的值。
 * 
 */

function useState(initialVal) {
    let _val = initialVal
    let state = _val
    const setState = newVal => _val = newVal
    return [state, setState]
}

const [count, setCount] = useState(1)
console.log(count) // 1
setCount(2)
console.log(count) // 1

