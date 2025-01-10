const express = require("express");
const router = express.Router();

const { insertUser, checkUser, getAllbooksFromDb } = require("./db_functions");

router.get("/", (req, res) => {
  getAllbooksFromDb(res)
});

router.post("/register", (req, res) => {
  const { email, userName, password, role } = req.body;

  insertUser(email, userName, password, role, res);
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  checkUser(email, password, res);
});

module.exports = router;
