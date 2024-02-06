import { Link } from "react-router-dom";

const AuthMenu = () => (
  <div className="auth-menu">
    <Link to="/auth">Login</Link>
    <Link to="/auth/register">Register</Link>
  </div>
);

export default AuthMenu;
