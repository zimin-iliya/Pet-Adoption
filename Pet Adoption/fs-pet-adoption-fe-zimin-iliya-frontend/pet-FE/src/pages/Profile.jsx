import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("John divavolta");
  const [email, setEmail] = useState("divavolta@gmail.com");
  const [city, setCity] = useState("Petah Tikva");
  return (
    <div className="main">
      
      <div className="card">
          <div>
            <div>
              <p>Name:{name}</p>
            </div>
            <div>
              <p>Email:{email}</p>
            </div>
            <div>
              <p>City:{city}</p>
            </div>
          </div>
        </div>
        <h2>
         <Link to="/admin">Admin Dashboard</Link>
      </h2>
      </div>
  );
}
export default Profile;
