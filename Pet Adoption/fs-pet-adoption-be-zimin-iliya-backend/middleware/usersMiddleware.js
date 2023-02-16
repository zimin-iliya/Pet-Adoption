const bcrypt = require("bcrypt");
const e = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { getUserByEmailModel } = require("../models/userModel");

const passwordsMatch = (req, res, next) => {
  if (req.body.password !== req.body.repassword) {
    res.status(400).send("Password dont match");
    return;
  }

  next();
};

const isNewUser = async (req, res, next) => {
  const user = await getUserByEmailModel(req.body.email);
  if (user.length !== 0) {
    res.status(400).send("User already exists");
    return;
  }
  next();
};

const hashPwd = (req, res, next) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    req.body.password = hash;
    next();
  });
};

const doesUserExist = async (req, res, next) => {
  const user = await getUserByEmailModel(req.body.email);
  if (!user) {
    res.status(400).send("User with this email does not exist");
    return;
  }

  req.body.user = user;
  next();
};

async function verifyPassword(req, res, next) {
  const { password, user } = req.body;

  bcrypt.compare(password, user[0].password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user[0].id }, process.env.TOKEN_SECRET, {
        expiresIn: "2h",
      });
      req.body.token = token;
      next();
    } else {
      res.status(400).send("Password don't match Login again");
    }
  });
}
const auth = (req, res, next) => {
  
  if (!req.headers.authorization) {
    res.status(401).send("Authorization headers required");
    return;
  }
  const token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send("Unauthorized missing token");
      return;
    }
    if (decoded) {
      req.headers.userId = decoded.id;
      console.log(req.headers.userId);

      next();
    }
  });
};

module.exports = {
  passwordsMatch,
  isNewUser,
  doesUserExist,
  hashPwd,
  verifyPassword,
  auth,
};
