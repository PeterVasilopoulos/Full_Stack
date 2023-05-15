// Establish a connection to db server
const mongoose = require("mongoose");

const dbName = "songDBCloud23";
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

// const uri = `mongodb+srv://${username}:${pw}@pogchamp.ist0h13.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const uri = `mongodb://127.0.0.1/${dbName}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established a comm link to DS Port Maintenance ${dbName}`))
.catch((err) => console.log('Abort! The Rebel Alliance is boarding the space station!', err))