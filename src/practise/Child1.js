import React from "react";
import { useState } from "react";

const Child1 = (props) => {
  const handleClick = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={handleClick}>
        Child1 {count} {props.parentCount(count)}
      </button>
    </div>
  );
};

export default Child1;
