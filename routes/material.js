const mongoose = require('mongoose');
require('../models/material');

const Material = mongoose.model('materials');

module.exports = (app) => {
    app.post('/api/materials', async (req, res) => {
        const material = new Material({
            branch: req.body.branch,
            name: req.body.name,
            price: req.body.price,
            priceGold: req.body.priceGold,
            pricePlatinum: req.body.pricePlatinum
        });
        try {
            await material.save();
            res.send(material);
        } catch (err) {
            res.status(422).send(err);
        }
    });
    
    app.get('/api/collections', (req, res) => {
        Material.find({})
            .then(materials => {
                res.send({
                    materials
                });
            });
    });
};