const db = require('../models');
const Tutorial = db.tutorial;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: 'Title can not be empty'
        });
        return;
    }
    Tutorial.create(req.body).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Tutorial.'
        });
    });
}