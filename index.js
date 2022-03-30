require('dotenv').config();
const express = require("express"); 
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/users");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//Listen
app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
})
