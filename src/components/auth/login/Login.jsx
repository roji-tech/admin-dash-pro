import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    console.log(`==== ${auth.user}`);

    if (auth.user) {
      navigate("/products");
      console.log(`======fdsg==sad==== ${auth.user}`);
    } else {
      navigate("/users");
      console.log(auth.user);
      // navigate(redirectPath, { replace: true });
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
          <form method="post">
            <div className="formInput">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                ref={emailRef}
                required
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formInput">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
              />
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
            Click here to create a
            <span>
              {/* <Link> */}
              new account
              {/* </Link> */}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
