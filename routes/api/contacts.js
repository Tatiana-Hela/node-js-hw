const express = require("express");

const contacts = require("../../db/contacts.json");

const router = express.Router();

router.get("api/contacts", (req, res) => {
  res.json(contacts);
});

router.get("/api/contacts/:id", (req, res) => {
  res.json(contacts[0]);
});

router.post("api/contacts", (req, res) => {
  res.status(201).json(contacts[0]);
});

router.put("/api/contacts/:id", (req, res) => {
  res.json(contacts[0]);
});

router.delete("/api/contacts/:id", (req, res) => {
  res.json(contacts[0]);
});

module.exports = router;
