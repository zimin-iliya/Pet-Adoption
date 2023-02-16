import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../Context/Usercontext";

function petPage() {

  const [petById, setpetById] = useState("");
  const context = useContext(UserContext);
  const { token } = context;

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    fetchPet(params);
    console.log(params);
  }, []);

  
    
    const fetchPet  = async (params) => {
    try {
     const res = await axios.get (`http://localhost:8080/pets/${params.id}`,{authorization: `Bearer ${token}`})
      console.log(res.data);
      setpetById(res.data)
    } catch (err) {
      console.log(err);
    }
  };
 

  async function adoptPet() {
console.log(petAdopted);
  }
 return (
    <div>
      <form className="addpetform">
        <h1>Friend Info</h1>
        <div className="form-item">
          <div className="form-line">
          <img className="solopic" src={petById.imageUrl} alt="Trees" />
            <h3>{petById.PetType}</h3>
          </div>
          <div className="form-line">
            <h3>Pets Name</h3>
            <p>{petById.PetName}</p>
          </div>
          <div className="form-line">
            <h3>Pets Height</h3>
            <p>{petById.Height}</p>
          </div>
          <div className="form-line">
            <h3>Pets Weight</h3>
            <p>{petById.Weight}</p>
          </div>
          <div className="form-line">
            <h3>Pets Color</h3>
            <p>{petById.Color}</p>
          </div>
          <div className="form-line">
            <h3>Pets Bio</h3>
            <p>{petById.Bio}</p>
          </div>
          <div className="form-line">
            <h3>Hypoallergenic</h3>
            <p>{petById.Hypoallergenic}</p>
          </div>
          <div className="form-line">
            <h3>Pets breed</h3>
            <p>{petById.breed}</p>
          </div>
          <div className="form-line">
            <h3>Is pet adopted?</h3>
            <p>{petById.IsAdopted}</p>
          </div>
          <div className="button-panel">
            <input
              type="submit"
              className="button"
              onClick={adoptPet}
              title="Add Pet"
              value="Adopt a Friend"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default petPage;
