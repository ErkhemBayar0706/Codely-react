import React, { useState } from "react";
import "./jf.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="count">
      <p>Count: {count}</p>
      <button className="item" onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <button className="server" onClick={() => setCount(count - 1)}>
        Decrease Count
      </button>
      <button className="pass" onClick={() => setCount(0)}>
        Reset Count
      </button>
    </div>
  );
};

export default Counter;
