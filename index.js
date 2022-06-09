require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: "https://telect-client.herokuapp.com/login", credentials: true }))

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

const userShows = require("./routes/mylist");
app.use("/mylist", userShows);

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
