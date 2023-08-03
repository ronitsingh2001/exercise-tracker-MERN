const Exercise = require("../models/exercise.model");

exports.getExercises = (req, res, next) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err))
}

exports.addExercise = (req, res, next) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)
    const newExercise = new Exercise({ username, description, duration, date });
    newExercise.save().then(result => {
        return res.json("Exercise added!")
    }).catch(err => res.status(400).json("Error: " + err))
}

exports.getExercise = (req, res, next) => {
    const id = req.params.exerciseId;
    Exercise.findById(id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err))
}

exports.deleteExercise = (req, res, next) => {
    const id = req.params.exerciseId;
    Exercise.findByIdAndRemove(id)
        .then(exercise => res.json("Exercise deleted!"))
        .catch(err => res.status(400).json("Error: " + err))
}
exports.updateExercise = (req, res, next) => {
    const id = req.params.exerciseId;
    Exercise.findById(id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration;
            exercise.date = req.body.date;

            exercise.save()
                .then(result => {
                    return res.json(result)
                }).catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
}   