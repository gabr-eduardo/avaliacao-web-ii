const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
