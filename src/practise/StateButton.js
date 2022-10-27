import React from "react";
import { useState } from "react";

const StateButton = () => {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    console.log("Button CLicked");
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleOnClick}>Count is {count}</button>
    </div>
  );
};

export default StateButton;
