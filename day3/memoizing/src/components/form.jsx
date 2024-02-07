import { useState } from "react";
import Header from "./header";

const Form = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Header />
    </div>
  );
};

export default Form;
