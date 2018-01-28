const mongoose = require('mongoose');
const { Schema } = mongoose;

const materialSchema = new Schema({
    name: String,
    price: Number
});

mongoose.model('materials', materialSchema);