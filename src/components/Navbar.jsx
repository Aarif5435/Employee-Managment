import { Link } from "react-router-dom";
import "./style.css"

export const Navbar = () => {

  return (
    <div className="navbar">
      <Link className="nav-home yes" to="/">
        Home
      </Link>
      <Link className="nav-list yes" to="/employee">
        Employee List
      </Link>
      <Link className="nav-admin yes" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout yes" to="/logout">
        Logout
      </Link>

      <Link className="nav-login yes" to="/login">
        Login
      </Link>
    </div>
  );
};
