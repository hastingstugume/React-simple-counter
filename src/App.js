import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const add = () => {
    setDisabled(true);
    setCount(count + 1);
  };
  const reduce = () => {
    if (count < 1) {
      setDisabled(false);
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setDisabled(false);
    setCount(0);
  };
  return (
    <div className="App">
      <h3>Counter - {count}</h3>
      <div>
        <button onClick={add}>Add</button>
        {disabled && <button onClick={reduce}>Reduce</button>}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
