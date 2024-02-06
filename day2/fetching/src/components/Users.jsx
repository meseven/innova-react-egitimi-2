import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Users = () => {
  const [selectedId, setSelectedId] = useState("1");

  const { data } = useFetch(`/users?id=${selectedId}`);

  return (
    <div>
      <select onChange={(event) => setSelectedId(event.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Users;
