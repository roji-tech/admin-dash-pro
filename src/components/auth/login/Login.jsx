import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GrUserAdmin, GrShieldSecurity } from "react-icons/gr";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useAuth } from "../Auth";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state ? location.state.prevPath : "/";

  const handleLogin = () => {
    auth.login();
    // logics goes here
    if (auth.user) {
      navigate(redirectPath, { replace: true });
    }
  };

  const handleClear = (e) => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    localStorage.setItem("user", true);
  }, [email]);

  return (
    <div className="login-wrap">
      <div className="loginContainer">
        <div className="login">
          <div className="login-header">
            <AdminPanelSettingsIcon className="admin-icon" />
            <h1>Admin Login</h1>
          </div>
          <form method="post">
            <div className="formInput">
              <label htmlFor="email">Email</label>
              <div className="input-wrap">
                <input
                  type="email"
                  ref={emailRef}
                  required
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PersonIcon
                  className="auth-icon"
                  htmlColor="red"
                  color="blue"
                />
              </div>
            </div>
            <div className="formInput">
              <label htmlFor="password">Password</label>
              <div className="input-wrap">
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LockIcon className="auth-icon" htmlColor="red" color="blue" />
              </div>
            </div>
            <div className="formBtn">
              <button type="submit" className="gradBtn-1" onClick={handleLogin}>
                Login
              </button>
              <button type="reset" className="gradBtn-2" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
          <hr />
          <p>
            Click here to create a{" "}
            <span>
              {" "}
              {/* <Link> */} new account
              {/* </Link> */}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
