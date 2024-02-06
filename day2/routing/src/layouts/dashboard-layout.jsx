import Menu from "../components/menu";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => (
  <div>
    <div className="menu-container">
      <Menu />
      <Link to="/auth">Logout</Link>
    </div>
    <div className="content">
      <Outlet />
    </div>

    <footer>Footer component</footer>
  </div>
);

export default DashboardLayout;
