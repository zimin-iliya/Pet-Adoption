import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Usercontext";
import axios from "axios";
import { useState } from "react";

function petinfo() {
  const context = useContext(UserContext);

  const { token } = context;
  const [allpets, setallpets] = useState([]);
  const navigate = useNavigate();

  async function fetchPets(e) {
    e.preventDefault();
    await axios
      .get("http://localhost:8080/pets", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setallpets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(allpets);
  }

  const myImage =
    "https://img.freepik.com/free-vector/cute-dog-licking-cat-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-5739.jpg?w=1060&t=st=1673805541~exp=1673806141~hmac=c4940c7700ddbcd78e4c0ae6a992f171695f0b816ef71c34c6d94d1fc3d0c03a";

  return (
    <>
      <div className="petcard">
        <div className="button-panel">
          <input
            type="submit"
            className="button"
            title="Sign In"
            value="Show all Pets"
            onClick={fetchPets}
          ></input>
        </div>
      </div>
      <div className="petcard">
        {allpets.map((pet, index) => (
          <div key={index} className="petinfo">
            <img className="petpic" src={pet.imageUrl || myImage} alt="Trees" />
            <h2 className="frndName">Friend name is:{pet.PetName} </h2>
            <p>status:{pet.AdopStatus}</p>
            <button onClick={() => navigate(`/pet?id=${pet.id}`)}  className="button">Show more</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default petinfo;
