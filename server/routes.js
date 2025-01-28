const express = require("express");
const router = express.Router();

const {
  insertUser,
  checkUser,
  getAllbooksFromDb,
  getOneSpresialBook,
  getBookByName,
} = require("./db_functions");

router.get("/", (req, res) => {
  getAllbooksFromDb(res);
});

router.get("/book/:title", (req, res) => {
  getBookByName(req, res);
});

router.post("/register", (req, res) => {
  insertUser(req, res);
});

router.post("/login", (req, res) => {
  checkUser(req, res);
});

module.exports = router;
