const { Schema, model } = require("mongoose");

const toySchema = new Schema(
  {
    name: String,
    price: Number,
    condition: String,
    pupster: {
      type: Schema.Types.ObjectId,
      ref: "Pupster",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Toy", toySchema);
