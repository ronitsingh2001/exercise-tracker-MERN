const User = require("../models/user.model");

exports.getUsers = (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err))
}

exports.addUser = (req, res, next) => {
    const username = req.body.username;
    const newUser = new User({ username });
    newUser.save().then(result => {
        return res.json("User added")
    }).catch(err => res.status(400).json("Error: " + err))
}