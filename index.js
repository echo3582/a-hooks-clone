/**
 * 二、模拟useState
 *
 * 1.为了缓存多个state，引入hooks数组和索引idx。
 * 2.render函数要把idx重新赋值为0，不然idx会一直增加，导致找不到对应的值。
 * 3.useState函数要引入一个局部变量id来保存idx的值，因为setState会被单独调用，要保证setState被调用的时候id是准确的。
 * 
 */

 const React = (function () {
    let hooks = [];
    let idx = 0;
    function useState(initialVal) {
      let id = idx;
      let state = hooks[id] || initialVal;
      const setState = (newVal) => (hooks[id] = newVal);
      idx++;
      return [state, setState];
    }
    function render(Component) {
      idx = 0;
      let C = Component();
      C.render();
      return C;
    }
    return { useState, render };
  })();
  
  const Component = function () {
    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState("Apple");
    return {
      render: () => console.log({ count, text }),
      click: () => setCount(count + 1),
      type: () => setText("Pear")
    };
  };
  
  var App = React.render(Component); // {count: 1, text: "Apple"}
  App.click();
  var App = React.render(Component); // {count: 2, text: "Apple"}
  App.type();
  var App = React.render(Component); // {count: 2, text: "Pear"}
  App.click();
  var App = React.render(Component); // {count: "3", text: "Pear"}
  