const jwt = require('jsonwebtoken');
const { readUsers, addUserModel,deleteUserModel } = require("../models/userModel");

async function getingUsers(req, res) {
  try {
    const allUsers = await readUsers();
    res.send(allUsers);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function addingUser(req, res) {
  try {
    const id = await addUserModel(req.body);
    if (id) {
      const newUser = {
        ...req.body,
        id: id,
      };
      res.send({id:id,ok:true});
    }
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
}


async function login(req, res) {
  try {
    const { user, token } = req.body;
    console.log(user[0].username)
    res.send({ name:user[0].username, token });
  } catch (error) {
    res.status(500).send(error);
  }
}
    
async function deleteUser(req, res) {
  try {
    const { userId } = req.params;
    const deleted = await deleteUserModel(userId);
    if (deleted) {
      res.send({ ok: true, deletedId: userId });
    }
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
}

module.exports = { getingUsers, addingUser,deleteUser,login };
