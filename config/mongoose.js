const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:1234@cluster0.r4cyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));

db.once("open", function () {
  console.log("Successfully connected to the database");
});
