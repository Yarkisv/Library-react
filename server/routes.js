const express = require("express");
const router = express.Router();

const { insertUser, checkUser } = require("./db_functions");

router.post("/register", (req, res) => {
  const { email, userName, password, role } = req.body;

  insertUser(email, userName, password, role, res);
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  checkUser(email, password, res);  
});

module.exports = router;
