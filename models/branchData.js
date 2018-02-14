const mongoose = require('mongoose');
const { Schema } = mongoose;

const branchDataSchema = new Schema({
    branchName: String,
    anglePrice: Number,
    cutPrice: Number,
    customStitch: Number,
    stitchAlignment: Number,
    multiMaterial: Number,
    curvePrice: Number,
    packPrice: Number
});

mongoose.model('branches', branchDataSchema);