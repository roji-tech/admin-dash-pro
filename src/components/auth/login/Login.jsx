import { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    
    // e.preventdefault();
    // console.log(e.target);
  };
  const handleReset = (e) => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-wrap">
      <div className="loginContainer">
        <div className="login">
          <form>
            <div className="formInput">
              <label htmlFor="email">Email</label>
              <input
                type="email"
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="formBtn">
              <button
                type="submit"
                className="gradBtn-1"
                onClick={handleSubmit}
              >
                Login
              </button>
              <button type="reset" className="gradBtn-2" onClick={handleReset}>
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
