const express = require("express");
const bodyParser = require("body-parser");

const HttpError = require("./models/httpError");

const placeRoutes = require("./routes/placeRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placeRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("could not find a path.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unkown error occured!!" });
});

app.listen(5000);
