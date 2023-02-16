import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Usercontext";
import axios from "axios";

function Login() {
  const { settoken, setcurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });


  const hanleLogIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/login", login);
      console.log(res.data);
      if (res.data.token) {
        settoken(res.data.token);
        setcurrentUser(res.data.user);
        localStorage.setItem('token', res.data.token);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      <form onSubmit={hanleLogIn}>
        <div className="form-item">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
            required="required"
            placeholder="Email Address"
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
            required="required"
            placeholder="Password"
          ></input>
        </div>
        <div className="button-panel">
          <input
            type="submit"
            className="button"
            title="Sign In"
            value="Sign In"
          ></input>
        </div>
      </form>
      <div className="form-footer">
        
      </div>
      <Outlet />
    </div>
  );
}
export default Login;
