//this is test file for use state

import { useState } from 'react';
const Test1 = () => {
  const [num, setNum] = useState(0); //if you are to use function inside initial state ,call that inside another arrow function,unless ir will call again and again

  const btnReduceHandler = () => {
    setNum((prevCount) => prevCount - 1);
  };
  const btnIncreaseHandler = () => {
    setNum((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
        <h3>use state</h3>
      <div className="content">
        <button className="btn" onClick={btnReduceHandler}>
          -
        </button>
        <span className="output">{num}</span>
        <button className="btn" onClick={btnIncreaseHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default Test1;
