var path = require("path");

const controller = {};

controller.getAllRoupas = (req, res) => {
  res.json(require("./dados.json"));
};

module.exports = controller;
