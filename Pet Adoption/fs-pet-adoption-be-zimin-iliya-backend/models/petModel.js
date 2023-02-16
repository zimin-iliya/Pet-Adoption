const { log } = require("console");

const dbConnection = require("../knex/knex");

async function readPets() {
  try {
    const pets = await dbConnection("pets").select("*");
    console.log(pets);
    return pets;
  } catch (error) {
    console.log(error);
  }
}

async function getpetByIdModel(petId) {
  try {
    const pet = await dbConnection.from('pets').where({id:petId}).first()
    return pet
  } catch (err) {
    console.log(err);
  }
}

async function deletePetModel(countryId) {
  try {

    const deleted = await dbConnection.from('pets').where({id:countryId}).del()
    return deleted
  } catch (err) {
    console.log(err);
  }
}

async function editPetModel(petId, editData) {
  try {
    const pets = await dbConnection.from('pets').where({id:petId}).update(editData)
    console.log(pets)
    return pets
  } catch (err) {
    console.log(err);
  }
}

async function searchPetsModel(query) {
  try {
    const pets = await dbConnection.from('pets').whereILike('PetName', `%${query.PetName}%`)
    return pets
  } catch (error) {
    console.log(error);
  }
}


async function addPetsModel(newPet) {
  try {
    const [id] = await dbConnection.from("pets").insert(newPet);
    return JSON.stringify (id);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { readPets, addPetsModel,getpetByIdModel,deletePetModel,editPetModel,searchPetsModel };
