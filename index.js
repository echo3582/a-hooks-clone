/**
 * 二、模拟useEffect
 *
 * 1.需要把上一次的依赖项数组缓存一下，通过hooks[idx] = depsArray，然后访问之前的缓存就是oldDeps = hooks[idx]（直接取hooks[idx]）
 * 2.useEffect需要根据依赖项是否发生变化判断执不执行回调，所以需要一个变量hasChange做标记，默认是true，
 * 然后每次对比新旧依赖数组里面的值，如有变化再执行回调。
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
    function useEffect(callback, depsArray) {
        const oldDeps = hooks[idx]
        let hasChange = true
        if(oldDeps) {
            hasChange = depsArray.some((dep, i) => !Object.is(dep, oldDeps[i]))
        }
        if(hasChange) callback()
        hooks[idx] = depsArray
        idx++
    }
    function render(Component) {
      idx = 0;
      let C = Component();
      C.render();
      return C;
    }
    return { useState, render, useEffect };
  })();
  
  const Component = function () {
    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState("Apple");
    React.useEffect(() => {
        console.log('useEffect')
    }, [count])
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
  