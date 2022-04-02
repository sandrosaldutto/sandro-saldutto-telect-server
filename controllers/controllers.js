const knex = require("knex")(require("../knexfile").development);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { query } = require("express");


// add user
exports.addUser = (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).send({
      message: "Please enter the required fields",
    });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

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
      const userId = user.id
      console.log(userId)
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        "TelecttceleT"
      );

      res.status(200).json({ token: token, userId: userId });
    })
    .catch(() => {
      res.status(400).send({
        message: "Username is not valid",
      });
    });
};


// add show
exports.addShow = (req, res) => {
  const { showId, userId } = req.body;
  console.log("addshow")
  if (!showId) {
    return res.status(400).send({
      message: "Please enter the required fields",
    });
  }
  knex("mylist")
  .insert({
    showId: showId,
    users_id: userId, 
  })
  .then(() => {
    res
    .status(201)
    .send("success")
  })
};

// get all shows by user

exports.getAllShowsByUser = (req, res) => {
  const { userId } = req.body
  console.log(req.body)
  knex ('mylist')
    .select(
      "*"
    )
    .where({"mylist.users_id": userId})
    .then(()=> {
      res
      .status(200)
      .send("success")
    })    
};