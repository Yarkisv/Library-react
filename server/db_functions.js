const connection = require("./db_config");
const User = require("./models/user_model");

const insertUser = (req, res) => {
  const query = "INSERT INTO users (email, username, password) VALUES (?,?,?)";
  const newUser = new User(
    req.body.email,
    req.body.userName,
    req.body.password
  );

  if (!newUser.email || !newUser.username || !newUser.password) {
    res.status(401).send({ success: false, message: "Invalid data" });
  }

  try {
    connection.query(
      query,
      [newUser.email, newUser.username, newUser.password],
      (err, result) => {
        if (err) {
          console.error("Database error:", err.message);
          res.status(500).send({ success: false, message: "Server error" });
        } else {
          console.log(
            `User Inserted | email: ${newUser.email} | username: ${newUser.username} | password: ${newUser.password}`
          );
          res
            .status(200)
            .send({ success: true, message: "Registration successful!" });
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const checkUser = (req, res) => {
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

  const email = req.body.email;
  const password = req.body.password;

  try {
    connection.query(query, [email, password], (err, result) => {
      if (err) {
        console.error(
          `Error checking user with { email: [${email}] password: [${password}] }`,
          err.message
        );
        res.status(500).send({ success: false, message: "Server error" });
      } else if (result.length === 0) {
        console.log(`User with { email: ${email} } does not exist!`);
        res
          .status(401)
          .send({ success: false, message: "Invalid email or password" });
      } else {
        console.log(`User with { email: ${email} } exists!`);
        res.status(200).send({ success: true, message: "Login successful" });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const getAllbooksFromDb = (res) => {
  const query = "SELECT * FROM books";

  try {
    connection.query(query, (err, result) => {
      if (err) {
        console.error("Database error: ", err);
        res.status(500).send({ success: false, message: "Database error" });
      } else {
        res.status(200).send({ data: result });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const getBookByName = (req, res) => {
  const query = "SELECT * FROM books WHERE title = ?";

  const title = req.params.title;

  try {
    connection.query(query, [title], (err, result) => {
      if (err) {
        console.error("Database error: ");
        res.status(500).send({ success: false, message: "Server error" });
      } else if (result.length === 0) {
        console.log(`Book with { title: [${title}]} does not exist!`);
        res.status(404).send({ success: false, message: "Book not found" });
      } else {
        console.log(`Book with { title: [${title}]} exists!`);
        res
          .status(200)
          .send({ data: result, success: true, message: "Book exist" });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  insertUser,
  checkUser,
  getAllbooksFromDb,
  getBookByName,
};
