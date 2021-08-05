const Pupster = require("../models/pupster");
const Toy = require("../models/toy");

exports.index = (req, res) => {
  Pupster.find({}, function (err, pupsters) {
    if (err) console.log(err);
    res.send(pupsters);
  });
};

exports.show = (req, res) => {
  Pupster.findById(req.params.id, function (err, pupster) {
    Toy.find({ pupster: req.params.id }, function (err, toys) {
      if (err) console.log(err);
      res.send({ pupster, toys });
    });
  });
};

exports.create = (req, res) => {
  Pupster.create(req.body, function (err, pupster) {
    if (err) console.log(err);
    res.redirect(`/pupsters/${pupster._id}`);
  });
};

exports.update = (req, res) => {
  Pupster.findById(req.params.id, function (err, pupster) {
    if (err) console.log(err);
    const updatedPupster = Object.assign(pupster, req.body);
    //{whats the id, what we changinging to, what to do with data}
    Pupster.findByIdAndUpdate(
      req.params.id,
      updatedPupster,
      function (err, pupster) {
        if (err) console.log(err);
        res.send(pupster);
      }
    );
  });
};

exports.deletePupster = (req, res) => {
  Pupster.findByIdAndDelete(req.params.id, function (err, deletedPupster) {
    if (err) console.log(err);
    res.send("delete");
  });
};
