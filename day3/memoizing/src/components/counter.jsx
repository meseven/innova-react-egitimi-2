import { useCallback, useState } from "react";
import Header from "./header";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback((amount) => {
    setCount((prev) => prev + amount);
  }, []);

  return (
    <div>
      <Header increase={increase} />
      <h2>count is {count}</h2>
      <button onClick={() => increase(1)}>Click</button>
    </div>
  );
};

export default Counter;
