/**
 * 二、模拟useState
 * 
 * 处理多个state的情况，当前代码处理多个state会发生问题，因为现在全局变量不是数组，所以变量的值会被覆盖。
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
    const [text, setText] = React.useState('Apple')
    return {
        render: () => console.log({count, text}),
        click: () => setCount(count + 1),
        type: () => setText('Pear')
    }
  }
  
  var App = React.render(Component) // {count: 1, text: "Apple"}
  App.click() 
  var App = React.render(Component) // {count: 2, text: 2}
  App.type() 
  var App = React.render(Component) // {count: "Pear", text: "Pear"}
  
  
  
  