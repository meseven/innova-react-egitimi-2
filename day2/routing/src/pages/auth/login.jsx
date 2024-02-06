import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="e-mail address" />
        <input placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
