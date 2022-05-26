const express = require("express");
const { addUser, getAllUser } = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes.post("/add", addUser);
userRoutes.get("/", getAllUser);

module.exports = userRoutes;
