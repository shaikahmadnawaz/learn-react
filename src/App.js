import "./App.css";
import Child1 from "./practise/Child1";
import Child2 from "./practise/Child2";
import { useState } from "react";
// import RenderingLists from "./practise/RenderingLists";
// import StateButton from "./practise/StateButton";

function App() {
  const [count, setCount] = useState(0);
  const parentCount = (value) => {
    setCount(value);
  };
  return (
    <>
      <Child1 parentCount={parentCount} />
      <Child2 count={count} />
    </>
  );
  // <StateButton />;

  // <RenderingLists />;
}

export default App;
