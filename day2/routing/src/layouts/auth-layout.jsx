import { Outlet } from "react-router-dom";
import AuthMenu from "../components/auth-menu";

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <AuthMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
