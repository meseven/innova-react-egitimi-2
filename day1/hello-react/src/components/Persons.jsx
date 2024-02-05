import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Counter from "./Counter";

const Persons = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Mehmet",
    },
    {
      id: "2",
      name: "Ayşe",
    },
    {
      id: "3",
      name: "Candan",
    },
  ]);

  const handleClick = () => {
    setData((prev) => [...prev, { id: uuidv4(), name: "Mete" }]);
  };

  console.log("Persons re-rendered");

  return (
    <div style={{ border: "solid 2px green", padding: 10 }}>
      <h2>Persons</h2>

      {data.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}

      <button onClick={handleClick}>Add</button>

      <br />
      <br />
      <br />

      <Counter setData={setData} />
    </div>
  );
};

export default Persons;
