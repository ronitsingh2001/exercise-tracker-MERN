const express = require("express");
const exerciseController = require("../controller/exercise")
const router = express.Router();

router.get("/", exerciseController.getExercises)
router.get("/:exerciseId", exerciseController.getExercise)
router.post("/add", exerciseController.addExercise)
router.put("/update/:exerciseId", exerciseController.updateExercise)
router.delete("/delete/:exerciseId", exerciseController.deleteExercise)

module.exports = router