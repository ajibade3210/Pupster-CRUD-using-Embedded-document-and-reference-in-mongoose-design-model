const { Schema, model } = require("mongoose");

//using mongoose embedding features
//embdded schema do not have model
const walkSchema = new Schema({
  route: String,
  distance: Number,
  date: Date,
});

const pupsterSchema = new Schema(
  {
    name: String,
    breed: String,
    age: Number,
    hasShots: Boolean,
    walks: [walkSchema],
  },
  { timestamps: true }
);

module.exports = model("Pupster", pupsterSchema);
