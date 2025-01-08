const connection = require("./db_config");

const insertUser = (email, username, password, role) => {
  const query =
    "INSERT INTO users (email, username, password, user_role) VALUES (?,?,?,?)";

  connection.query(query, [email, username, password, role], (err, res) => {
    if (err) {
      console.error("Database error:", err.message);
    } else {
      console.log(
        `User Inserted | email: ${email} | username: ${username} | password: ${password} | role: ${role}`
      );
    }
  });
};

const checkUser = (email, password) => {
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error(
        `Error checking user with { email: [${email}] password: [${password}] }`,
        err.message
      );
    } else {
      if (result.length === 0) {
        console.log(`User with { email: ${email} } does not exist!`);
      } else {
        console.log(`User with { email: ${email} } exists!`);
      }
    }
  });
};

module.exports = {
  insertUser,
  checkUser,
};
