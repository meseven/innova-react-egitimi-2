import { useState } from "react";

const Person = () => {
  const [data, setData] = useState({ id: 1, name: "Filiz" });

  const handleClick = () => {
    setData((prev) => ({ ...prev, name: "Murat", surname: "Can" }));
  };

  return (
    <div>
      <h2>Person</h2>
      {JSON.stringify(data, null, 2)}

      <br />
      <br />

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Person;
