const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require("./configs/mongoose.config");

// These two options do the same thing
// Option 1
const Routes = require("./routes/song.routes");
Routes(app);

// Option 2
// require("./routes/song.routes")(app);

app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port: ${port}`));