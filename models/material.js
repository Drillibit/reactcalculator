const mongoose = require('mongoose');
const { Schema } = mongoose;

const materialSchema = new Schema({
    branch: String,
    name: String,
    price: Number,
    priceGold: Number,
    pricePlatinum: Number
});

mongoose.model('materials', materialSchema);