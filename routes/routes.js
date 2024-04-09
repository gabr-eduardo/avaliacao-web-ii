const express = require("express");
const controller = require("../controllers/controller");

const routes = express.Router();

routes.get("/", controller.getAllRoupas);
routes.get("/:id", controller.getRoupasById);
routes.post("/", controller.createRoupa);
routes.put("/:id", controller.updateRoupa);
routes.delete("/:id", controller.deleteRoupa);

module.exports = routes;
