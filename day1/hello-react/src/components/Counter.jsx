import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval çalıştı");
      setCount((prev) => prev + 1); // setCount(0 + 1) => 1
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   console.log("count state changed");
  // }, [count]);

  // useEffect(() => {
  //   console.log("amount state changed");
  // }, [amount]);

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={() => setCount((prev) => prev + amount)}>
        Increase
      </button>

      <h2>Amount {amount}</h2>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(5)}>+5</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </div>
  );
};

export default Counter;
