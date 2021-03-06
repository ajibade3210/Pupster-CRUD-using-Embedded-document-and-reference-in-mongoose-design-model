const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pupsters", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//Short to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}: ${db.port}`);
});
