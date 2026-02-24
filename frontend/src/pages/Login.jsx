import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    setUser({ role, email });
    navigate(`/${role}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Service Request Management</h2>
        
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email-input">Email</label>
            <input 
              id="email-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password-input">Password</label>
            <input 
              id="password-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role-select">Select Your Role</label>
            <select 
              id="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="client">Client</option>
              <option value="employee">Employee</option>
              <option value="hr">HR</option>
            </select>
          </div>

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
