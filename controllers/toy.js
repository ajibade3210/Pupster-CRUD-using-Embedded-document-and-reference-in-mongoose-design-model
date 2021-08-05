const Toy = require("../models/toy");
const Pupster = require("../models/pupster");

exports.create = (req, res) => {
  //add pupster to body
  req.body.pupster = req.params.id;
  Toy.create(req.body, function (err, toy) {
    if (err) console.log(err);
    res.redirect(`/pupsters/${req.params.id}`);
  });
};

exports.update = (req, res) => {
  Toy.findById(req.params.id, function (err, toy) {
    Object.assign(toy, req.body);
    toy.save(function (err, toy) {
      if (err) console.log(err);
      res.redirect(`/pupsters/${toy.pupster}`);
    });
  });
};

exports.deleteToy = (req, res) => {
  Toy.findByIdAndDelete(req.params.id, function (err, deleteToy) {
    if (err) console.log(err);
    res.status(410).json({
      msg: "Toy Delete Successful",
    });
  });
};
