const db = require("../models");
const Tutorial = db.tutorial;

// Create
exports.create = async (req, res) => {
  try {
    const tutorial = new Tutorial(req.body);
    const data = await tutorial.save();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Get all
exports.findAll = async (req, res) => {
  try {
    const data = await Tutorial.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Get one
exports.findOne = async (req, res) => {
  try {
    const data = await Tutorial.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    await Tutorial.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Tutorial updated successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    await Tutorial.findByIdAndDelete(req.params.id);
    res.send({ message: "Tutorial deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete all
exports.deleteAll = async (req, res) => {
  try {
    await Tutorial.deleteMany({});
    res.send({ message: "All tutorials deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};