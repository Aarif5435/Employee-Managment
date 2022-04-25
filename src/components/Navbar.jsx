import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { LogoutContext } from "./Logout";
import "./style.css"

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const {handleLogout} = useContext(LogoutContext);

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
      {isAuth ? <Link className="nav-logout yes" to="/login">
        Logout
      </Link> :  
      <Link className="nav-login yes" to="/login" >
        Login  
      </Link> }
      

      
    </div>
  );
};
