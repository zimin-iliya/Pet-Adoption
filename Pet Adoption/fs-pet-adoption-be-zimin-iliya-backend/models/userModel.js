const { log } = require("console");
const fs = require("fs");
const path = require("path");

const pathToUsersDB = path.resolve(__dirname, "../database/DBusers.json");
const dbConnection = require("../knex/knex");

async function readUsers() {
  try {
    const users = await dbConnection("users").select("*");
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function addUserModel(newUser) {
  try {
    const [id] = await dbConnection.from("users").insert(newUser);
    console.log(id);
    return JSON.stringify(id);
  } catch (error) {
    console.log(error);
  }
}
async function deleteUserModel(UserId) {
  try {
    console.log(UserId);
    const deleted = await dbConnection.from('users').where({id:UserId}).del()
    return deleted;
  } catch (err) {
    console.log(err);
  }
}
async function getUserByEmailModel(email) {
  try {
    const user = await dbConnection.from("users").where({ email: email });
    console.log(user);
    return user;
} catch (error) {
    console.log(error);
  }
}
module.exports = {
  readUsers, 
  addUserModel, deleteUserModel,
  getUserByEmailModel,
};
