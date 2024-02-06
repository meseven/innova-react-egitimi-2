import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Users = () => {
  const { data, error, loading } = useFetch("/users");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Users</h2>
      {data.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
