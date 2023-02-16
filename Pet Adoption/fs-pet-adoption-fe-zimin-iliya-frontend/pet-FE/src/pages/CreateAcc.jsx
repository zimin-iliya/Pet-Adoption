import React, { useContext } from "react";
import { UserContext } from "../Context/Usercontext";
import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function CreateAcc() {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const [newuser, setnewuser] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    isAdmin: false,
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log(newuser);
      const res = await axios.post(
        "http://localhost:8080/users/signup",
        newuser
      );
      if (res.data.ok) {
        console.log(res.data);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form-wrapper">
      <h1>Sign Up</h1>
      <form>
        <div className="form-item">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            onChange={(e) => setnewuser({ ...newuser, email: e.target.value })}
            value={newuser.email}
            required="required"
            placeholder="New Email Address"
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="Username"></label>
          <input
            type="Username"
            name="Username"
            onChange={(e) =>
              setnewuser({ ...newuser, username: e.target.value })
            }
            value={newuser.username}
            required="required"
            placeholder="New Username"
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="new-password"></label>
          <input
            type="password"
            name="New Password"
            value={newuser.password}
            onChange={(e) =>
              setnewuser({ ...newuser, password: e.target.value })
            }
            required="required"
            placeholder="New Password"
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="Repat password"></label>
          <input
            type="password"
            name="Repeat password"
            value={newuser.repassword}
            onChange={(e) =>
              setnewuser({ ...newuser, repassword: e.target.value })
            }
            required="required"
            placeholder="Repeat password"
          ></input>
        </div>
        <div className="button-panel">
          <input
            type="submit"
            className="button"
            onClick={handleSignUp}
            title="Sign In"
            value="Create Account"
          ></input>
        </div>
      </form>
    </div>
  );
}
export default CreateAcc;
