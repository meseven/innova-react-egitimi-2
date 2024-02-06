import "./App.css";
import Users from "./components/Users";
// import { useFetch } from "./hooks/useFetch";

function App() {
  // const { data, error, loading } = useFetch("/users");

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      {/* <h2>Users</h2> */}
      {/* {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))} */}

      <Users />
    </div>
  );
}

export default App;
