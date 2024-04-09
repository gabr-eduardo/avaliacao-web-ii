let path = require("path");
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

controller.createRoupa = (req, res) => {
  const novaRoupa = req.body;
  novaRoupa.id = data.length + 1;
  data.push(novaRoupa);
  res.status(200).redirect("/");
};

module.exports = controller;
