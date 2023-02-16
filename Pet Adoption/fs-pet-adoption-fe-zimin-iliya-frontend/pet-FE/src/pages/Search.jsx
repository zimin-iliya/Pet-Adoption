import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/Usercontext";

export function Search() {
  const context = useContext(UserContext);
  const { token } = context;
    const [SearchPet, setSearchPet] = useState({
        PetType: "",
        PetName: "",
        IsAdopted: false,
        Height: 0,
        Weight: 0,
        Color: "",
        Hypoallergenic: false,
        dietrest: "",
        breed: "",
      });
    const onSubmit  = async (e) => {
        e.preventDefault();
       const res = await axios.get ("http://localhost:8080/pets/search", {params:SearchPet,headers: {authorization: `Bearer ${token}`}})
        console.log(res.data);
    }
  return (
    <div className="petform">
      <h1>Advanced Search</h1>
      <form className="addpetform">
        <div className="form-item">
          <div>
            <select
              onChange={(e) => setSearchPet({ ...SearchPet, PetType: e.target.value })}
            >
              <option value={"Dog"}>Dog</option>
              <option value={"Cat"}>Cat</option>
            </select>
          </div>
          <input
            type="PetName"
            name="PetName"
            onChange={(e) => setSearchPet({ ...SearchPet, PetName: e.target.value })}
            value={SearchPet.PetName}
            required="required"
            placeholder="Your pet name"
          ></input>
          <input
            type="number"
            name="Height"
            onChange={(e) => setSearchPet({ ...SearchPet, Height: e.target.value })}
            value="number"
            required="required"
            placeholder="Pets Height"
          ></input>
          <input
            type="number"
            name="Weight"
            onChange={(e) => setSearchPet({ ...SearchPet, Weight: e.target.value })}
            value="number"
            required="required"
            placeholder="Pets Weight"
          ></input>
          <input
            type="text"
            name="Pets Color"
            onChange={(e) => setSearchPet({ ...SearchPet, Color: e.target.value })}
            value="Color"
            required="required"
            placeholder="Pets Color"
          ></input>
          <input
            type="text"
            name="Hypoallergenic"
            onChange={(e) =>
              setSearchPet({ ...SearchPet, Hypoallergenic: e.target.value })
            }
            value="Hypoallergenic"
            required="required"
            placeholder="Hypoallergenic"
          ></input>
          <input
            type="text"
            name="breed"
            onChange={(e) => setSearchPet({ ...SearchPet, breed: e.target.value })}
            value="breed"
            required="required"
            placeholder="breed"
          ></input>
          <p>Is pet adopted?</p>
          <div>
            <select
              required="required"
              onChange={(e) => setSearchPet({ ...SearchPet, IsAdopted: e.target.value })}
            >
              <option value={"NotAdopted"}>NotAdopted</option>
              <option value={"Adopted"}>Adopted</option>
            </select>
          </div>
          
          <div className="button-panel">
            <input
              className="button"
              onClick={onSubmit}
              title="Find a Friend"
              value="Find a Friend"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
