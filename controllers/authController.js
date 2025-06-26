const express = require("express");
const User = require("../models/user");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) return;
  res.status(401).json({ message: "invalid creditanls" });
};

module.exports = loginUser;
