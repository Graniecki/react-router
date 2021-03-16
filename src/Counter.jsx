import { useState, useEffect, useContext, useRef } from 'react';

import { titleContext } from './App';

export const Counter = () => {
  const [count, setCount] = useState(0);

  // Context
  const { title, changeTitle } = useContext(titleContext);

  // Refs
  const titleRef = useRef(null);

  const changeRef = () => {
    titleRef.current.style.color = 'tomato';
    console.log(titleRef.current.innerText);
  };

  const increase = () => {
    setCount(current => current + 1);
  };

  const decrease = () => {
    setCount(current => current - 1);
  };

  useEffect(() => {
    console.log('counter');
  });

  return (
    <div>
      <h1>Current count: {count}</h1>
      <h2 ref={titleRef}>Title - {title}</h2>
      <button onClick={changeRef}>Change Ref</button>
      <button onClick={changeTitle}>Change title</button>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};
