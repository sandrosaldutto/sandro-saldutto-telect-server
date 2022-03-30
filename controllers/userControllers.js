const knex = require('knex')(require('../knexfile').development);

// get one user
exports.getOne = (req, res) => {

    knex('users')
        .where({'users.id': req.params.userId})
        .first()
        .then((usersInfo) => {
            res.json(usersInfo);
        })
}

// add user

exports.addOne = (req, res) => {
    console.log(req.body)
    if (!req.body.username || !req.body.name || !req.body.password) {
        res.status(400).send({
            message: "Please enter all required fields."
        })
    } else {
        knex('users')
            .insert(req.body)
            .then(newUser => {
                console.log("newuser:", newUser)
                res.json(newUser)
            })
    }
}

// edit user
exports.editOne = (req, res) => {
    knex('users')
        .update(req.body)
        .where({id: req.params.userId})
        .then(() => {
            res.send(`User with id: ${req.params.userId} is now updated`)
        })
        .catch(err => {
            res.status(400).send(`Error updating user ${req.params.userId} ${err}`)
        })
}

// delete user 
exports.deleteOne = (req, res) => {
    knex('users')
        .delete()
        .where({id: req.params.userId})
        .then(() => {
            res.status(204).send(`User with id ${req.params.userId} has been deleted`)
        })
        .catch(err => {
            res.status(400).send(`Error deleting user ${req.params.userId} ${err}`)
        })
}
