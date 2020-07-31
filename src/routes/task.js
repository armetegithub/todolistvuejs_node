const Router = require("express");
const router = Router();

const Task = require("../models/task");
const { find } = require("../models/task");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  new Task();
  const task = new Task(req.body);
  await task.save();
  console.log(task);
  //   console.log(req.body);
  res.json({
    status: "Tarea guardada",
  });
});

router.put("/:id", async (req, res) => {
  console.log(req.params);
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: "Tarea actualizada",
  });
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({
    status: "Trea borrada",
  });
});

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

module.exports = router;
