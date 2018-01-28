const mongoose = require('mongoose');
require('../models/material');

const Material = mongoose.model('materials');

module.exports = (app) => {
    app.post('/api/materials', async (req, res) => {
        const material = new Material({
            name: req.body.name,
            price: req.body.price
        });
        try {
            await material.save();
            res.send(material);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};