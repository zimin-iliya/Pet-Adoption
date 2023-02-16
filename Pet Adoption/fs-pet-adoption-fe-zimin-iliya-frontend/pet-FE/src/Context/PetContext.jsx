import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "./Usercontext";
export const PetContext = React.createContext(null);

const PetContextProvider = ({ children }) => {
  const context = useContext(UserContext);
  const { token } = context;

  const [img, setimg] = useState('');
  const [Pets, setPets] = useState({
    PetType: "",
    PetName: "",
    IsAdopted: false,
    Height: 0,
    Weight: 0,
    Color: "",
    Bio: "",
    Hypoallergenic: false,
    dietrest: "",
    breed: "",
    AdoptedBy: "",
    picture: "",
  });
  console.log(Pets);

  const handleSendPet = async (e) => {
    e.preventDefault();
    try {
      const newpet = new FormData()
      newpet.append('PetType', Pets.PetType)
      newpet.append('PetName', Pets.PetName)
      newpet.append('IsAdopted', Pets.AdopStatus)
      newpet.append('Height', Pets.Height)
      newpet.append('Weight', Pets.Weight)
      newpet.append('Color', Pets.Color)
      newpet.append('Bio', Pets.Bio)
      newpet.append('Hypoallergenic', Pets.Hypoallergenic)
      newpet.append('breed', Pets.breed)
      newpet.append('AdoptedBy', Pets.AdoptedBy)
      newpet.append('petimg', img)

      console.log(newpet);
      const res = await axios.post("http://localhost:8080/pets", newpet, {headers: {authorization: `Bearer ${token}`}});
      console.log(res.data);
    } catch (err) {
      console.log("this", err);
    }
  };

  return (
    <PetContext.Provider value={{ Pets, setPets, handleSendPet, setimg }}>
      {children}
    </PetContext.Provider>
  );
};
export default PetContextProvider;
