const knex = require("knex")(require("../knexfile").development);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


// get one user
exports.getUser = (req, res) => {
  knex("users")
    .where({ "users.id": req.params.userId })
    .first()
    .then((usersInfo) => {
      res.json(usersInfo);
    });
};

// add user
exports.addUser = (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).send({
      message: "Please enter the required fields",
    });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  //save the information to database
  knex("users")
    .insert({
      name: name,
      username: username,
      password: hashedPassword,
    })
    .then(() => {
      res.status(201).send({
        message: "Registered Successfully",
      });
    })
    .catch(() => {
        res.status(500).send({
            message: "Error registering user",
        });
    });
};

// login
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({
      message: "Please enter the required fields",
    });
  }
  
  knex("users")
    .where({ username: username })
    .first()
    .then((user) => {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).send({
          message: "Invalid Password. Please try again",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        "TelecttceleT"
      );

      res.status(200).json({ token: token });
    })
    .catch(() => {
      res.status(400).send({
        message: "Username is not valid",
      });
    });
};

// edit user
exports.editUser = (req, res) => {
  knex("users")
    .update(req.body)
    .where({ id: req.params.userId })
    .then(() => {
      res.send(`User with id: ${req.params.userId} is now updated`);
    })
    .catch((err) => {
      res.status(400).send(`Error updating user ${req.params.userId} ${err}`);
    });
};

// delete user
exports.deleteUser = (req, res) => {
  knex("users")
    .delete()
    .where({ id: req.params.userId })
    .then(() => {
      res
        .status(204)
        .send(`User with id ${req.params.userId} has been deleted`);
    })
    .catch((err) => {
      res.status(400).send(`Error deleting user ${req.params.userId} ${err}`);
    });
};

