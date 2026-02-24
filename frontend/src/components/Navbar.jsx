import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "./Navbar.css";

function Navbar() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">Service Request Management</h1>
      <div className="navbar-right">
        {user?.email && <span className="user-email">{user.email}</span>}
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;