import { Link } from "react-router-dom";

const Menu = () => (
  <ul className="menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

export default Menu;
