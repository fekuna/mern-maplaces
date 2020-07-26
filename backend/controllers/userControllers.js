const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/httpError");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "Alfan Almunawar",
    email: "almunawar.alfan@gmail.com",
    password: "asd123",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed. please check your data.", 422);
  }

  const { name, email, password } = req.body;

  const userIsRegistered = DUMMY_USERS.find((u) => u.email === email);

  if (userIsRegistered) {
    throw new HttpError("Could not create user, email already exists.", 422);
  }

  const userCreated = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(userCreated);

  res.status(201).json({ user: userCreated });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const userRegistered = DUMMY_USERS.find((u) => u.email === email);

  if (!userRegistered || password !== userRegistered.password) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong",
      401
    );
  }

  res.json({ message: "logged in!" });
};

module.exports = {
  getUsers,
  signup,
  login,
};
