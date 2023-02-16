import React, { useContext } from "react";
import { useState } from "react";
import { PetContext } from "../Context/PetContext";

function Admin() {
  const [adopted, setadopted] = useState(false);
  const [image, setimage] = useState("");
  console.log(adopted);
  const context = useContext(PetContext);

  const { Pets, setPets, handleSendPet, setimg } = context;
  console.log(Pets);
  const handleAdopted = () => {
    setadopted(!adopted);
    setPets({ ...Pets, AdopStatus: adopted });
  };

  const handleImage = (e) => {
    setimg(e.target.files[0]);
  };
  return (
    <div className="petform">
      
      <form className="addpetform">
      <h1>Add a Pet</h1>
        <div className="form-item">
          <div className="form-line">
          <h3>Is it</h3>
            <select
              onChange={(e) => setPets({ ...Pets, PetType: e.target.value })}
            >
              <option value={"Dog"}>Dog</option>
              <option value={"Cat"}>Cat</option>
            </select>
          </div>
          <div className="form-line">
            <h3>Pets Name</h3>
            <input
              type="PetName"
              name="PetName"
              onChange={(e) => setPets({ ...Pets, PetName: e.target.value })}
              value={Pets.PetName}
              required="required"
              placeholder="Your pet name"
            ></input>
          </div>
          <div className="form-line">
            <h3>Pets Height</h3>
            <input
              type="number"
              name="Height"
              onChange={(e) => setPets({ ...Pets, Height: e.target.value })}
              value={Pets.Height}
              required="required"
              placeholder="Pets Height"
            ></input>
          </div>
          <div className="form-line">
            <h3>Pets Weight</h3>
            <input
              type="number"
              name="Weight"
              onChange={(e) => setPets({ ...Pets, Weight: e.target.value })}
              value={Pets.Weight}
              required="required"
              placeholder="Pets Weight"
            ></input>
          </div>
          <div className="form-line">
            <h3>Pets Color</h3>
            <input
              type="text"
              name="Pets Color"
              onChange={(e) => setPets({ ...Pets, Color: e.target.value })}
              value={Pets.Color}
              required="required"
              placeholder="Pets Color"
            ></input>
          </div>
          <div className="form-line">
            <h3>Pets Bio</h3>
            <input
              type="text"
              name="Bio"
              onChange={(e) => setPets({ ...Pets, Bio: e.target.value })}
              value={Pets.Bio}
              required="required"
              placeholder="Bio"
            ></input>
          </div>
          <div className="form-line">
            <h3>Hypoallergenic</h3>
            <input
              type="text"
              name="Hypoallergenic"
              onChange={(e) =>
                setPets({ ...Pets, Hypoallergenic: e.target.value })
              }
              value={Pets.Hypoallergenic}
              required="required"
              placeholder="Hypoallergenic"
            ></input>
          </div>
          <div className="form-line">
            <h3>Pets Breed</h3>
            <input
              type="text"
              name="breed"
              onChange={(e) => setPets({ ...Pets, breed: e.target.value })}
              value={Pets.breed}
              required="required"
              placeholder="breed"
            ></input>
          </div>
          <div className="form-line">
            <h3>Is pet adopted?</h3>
            <select
              required="required"
              onChange={(e) => setPets({ ...Pets, IsAdopted: e.target.value })}
            >
              <option value={"No"}>NotAdopted</option>
              <option value={"Yes"}>Adopted</option>
            </select>
          </div>
          <div className="form-line">
            <input
              type="file"
              name="petimg"
              accept="img/*"
              onChange={handleImage}
            />
          </div>
          <div className="button-panel">
            <input
              type="submit"
              className="button"
              onClick={handleSendPet}
              title="Add Pet"
              value="Add Pet"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Admin;
