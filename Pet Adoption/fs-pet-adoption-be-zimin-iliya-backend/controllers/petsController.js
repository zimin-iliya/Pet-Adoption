const { deletePetModel,readPets, addPetsModel,getpetByIdModel,searchPetsModel } = require("../models/petModel");

async function getingPets(req, res, next) {
  try {
    const allPets = await readPets();
    res.send(allPets);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function searchPets(req, res, next) {

  try {
 const serchpets = await searchPetsModel(req.query)
console.log(req.query);
res.send (serchpets)
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postingPets(req, res, next) {
  try {
    const newPet = {
      ...req.body,
      imageUrl: req.file.path,
      userId: req.headers.userId,
    };

    const id = await addPetsModel(newPet);
    if (id) {
      const newPetPlus = {
        ...req.body,
        id: id,
      };
      res.send(newPetPlus);
    }
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
}

const getpetById = async (req, res) => {
  try {
    const { petId } = req.params;
    const pet = await getpetByIdModel(petId);
    res.send(pet);
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

const editPet = async (req, res) => {
  try {
    const { PetId } = req.params;
    // const { name, capital } = req.body;
    const edited = await editPetModel(countryId, req.body);
    if (edited) {
      res.send({ ok: true });
    }
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

const deletePet = async (req, res) => {
  try {
    const { petId } = req.params;
    const deleted = await deletePetModel(petId);
    if (deleted) {
      res.send({ ok: true, deletedId: petId });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getingPets, postingPets,getpetById,deletePet,editPet,searchPets };
