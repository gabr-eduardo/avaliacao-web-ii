var path = require("path");
const data = require("./dados.json");

const controller = {};

// retorna dados.json na raiz
controller.getAllRoupas = (req, res) => {
  res.json(require("./dados.json"));
};

// retorna a roupa correspondente ao id
controller.getRoupasById = (req, res) => {
  const id = parseInt(req.params.id);
  item = data.find((item) => item.id === id);

  if (item) {
    res.status(200).send(item);
  } else {
    res
      .status(404)
      .sendFile(path.resolve(__dirname + "/../views/not-found/index.html"));
  }
};

module.exports = controller;
