const express = require("express");
const bodyParser = require("body-parser");

const placesRouter = require("./routes/places-routes");

const app = express();

app.use(bodyParser.json());

app.use("/favicon.ico", (req, res) => res.status(204).end());

app.use(placesRouter);

app.listen(5000);
