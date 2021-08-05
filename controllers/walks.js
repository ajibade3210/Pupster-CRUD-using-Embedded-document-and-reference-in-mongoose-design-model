const Pupster = require("../models/pupster");

exports.create = (req, res) => {
  Pupster.findById(req.params.id, function (err, pupster) {
    pupster.walks.push(req.body);
    pupster.save(function (err, pupster) {
      res.status(200).json({
        pupster,
      });
    });
  });
};

exports.update = (req, res) => {
  Pupster.findOne({ "walks._id": req.params.id }, function (err, pupster) {
    let walk = pupster.walks.id(req.params.id);
    Object.assign(walk, req.body);
    pupster.save(function (err) {
      res.send(pupster);
    });
  });
};

exports.deleteWalk = (req, res) => {
  Pupster.findOne({ "walks._id": req.params.id }, function (err, pupster) {
    pupster.walks.remove(req.params.id);
    pupster.save(function (err, pupster) {
      res.send(pupster);
    });
  });
};
