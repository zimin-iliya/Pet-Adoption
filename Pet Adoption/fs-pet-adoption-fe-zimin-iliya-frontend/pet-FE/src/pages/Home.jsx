import React from "react";
import PetInfo from "./PetInfo";

import { useState } from "react";

function Home() {

  return (
    <>
      <div className="header">
        <h1>Find a Friend</h1>

        <p className="headerText">
          Welcome to our pet adoption website! We are so glad you're here. On
          our site, you'll find a variety of pets looking for their forever
          homes. Whether you're looking for a playful puppy, a cuddly kitten, or
          a mature companion, we've got you covered. We believe every pet
          deserves a loving home, and we're here to help you find the perfect
          match.
        </p>
        
      </div>
      <div>
        <PetInfo />
      </div>
    </>
  );
}
export default Home;
