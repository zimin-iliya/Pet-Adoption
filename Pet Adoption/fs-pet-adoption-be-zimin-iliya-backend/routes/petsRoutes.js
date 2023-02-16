const express = require("express");
const {getingPets, postingPets,getpetById,deletePet,editPet,searchPets} = require("../controllers/petsController");
const {auth} = require("../middleware/usersMiddleware");
const {upload, generateUrl} = require("../middleware/pictureMiddleware");


const router = express.Router();
router.get ("/search", auth, searchPets);
router.post("/", auth, upload.single('petimg'),  postingPets );

router.get("/", auth,  getingPets);



router.get('/:petId',getpetById );
router.delete('/:petId', auth, deletePet);
router.put('/:petId', auth, editPet);

module.exports = router;