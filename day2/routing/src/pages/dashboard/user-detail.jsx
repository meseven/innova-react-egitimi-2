import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const UserDetail = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(`/users?id=${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UserDetail;
