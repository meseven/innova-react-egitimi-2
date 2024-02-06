import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/dashboard-layout";

// pages
import Home from "./pages/dashboard/home";
import About from "./pages/dashboard/about";
import Error404 from "./pages/Error404";
import Users from "./pages/dashboard/users";
import UserDetail from "./pages/dashboard/user-detail";
import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={DashboardLayout}>
        <Route index Component={Home} />
        <Route path="about" Component={About} />
        <Route path="users">
          <Route index Component={Users} />
          <Route path=":id" Component={UserDetail} />
        </Route>
        <Route path="*" Component={Error404} />
      </Route>

      <Route path="auth" Component={AuthLayout}>
        <Route index Component={Login} />
        <Route path="register" Component={Register} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
