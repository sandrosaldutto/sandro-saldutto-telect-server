require('dotenv').config();
const express = require("express"); 
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;

app.use(cors());

//Routes

//Listen
app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
})
