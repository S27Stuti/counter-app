import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="title">Counter App</h1>
        <br/>
    
        <div className="counter-value">
          {count}
        </div>

        <div className="btn-group">
          <button className="btn decrease" onClick={decrease}>
            −
          </button>

          <button className="btn reset" onClick={reset}>
            Reset
          </button>

          <button className="btn increase" onClick={increase}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;