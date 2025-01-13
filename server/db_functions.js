const connection = require("./db_config");

const insertUser = (email, username, password, role, res) => {
  const query =
    "INSERT INTO users (email, username, password, user_role) VALUES (?,?,?,?)";

  if (!email || !username || !password || !role) {
    res.status(401).send({ success: false, message: "Invalid data" });
  }

  connection.query(query, [email, username, password, role], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      res.status(500).send({ success: false, message: "Server error" });
    } else {
      console.log(
        `User Inserted | email: ${email} | username: ${username} | password: ${password} | role: ${role}`
      );
      res
        .status(200)
        .send({ success: true, message: "Registration successful!" });
    }
  });
};

const checkUser = (email, password, res) => {
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

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
};

const getAllbooksFromDb = (res) => {
  const query = "SELECT * FROM books";

  connection.query(query, (err, result) => {
    if (err) {
      console.error("Database error: ", err);
      res.status(500).send({ success: false, message: "Database error" });
    } else {
      res.status(200).send({ data: result });
    }
  });
};

const getOneSpresialBook = (res, id) => {
  const query = "SELECT * FROM books WHERE id = ?";

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Database error: ", err);
      res.status(500).send({success: false, message: "Server error"})
    } else if (result.length === 0) {
      console.log(`Book with { id: [${id}]} does not exist!`)
      res.status(404).send({ success: false, message: "Book not found" });
    } else {
      console.log(`Book with { id: [${id}]} exists!`)
      res.status(200).send({ data: result, success: true, message: "Book exist"});
    }
  });
};

module.exports = {
  insertUser,
  checkUser,
  getAllbooksFromDb,
  getOneSpresialBook,
};
