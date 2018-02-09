const mongoose = require('mongoose');
const { Schema } = mongoose;
const materialSchema = require('./material');

const branchDataSchema = new Schema({
    branchName: String,
    anglePrice: String,
    materials: [materialSchema],
    cutPrice: String,
    customStitch: String,
    stitchAlignment: String,
    multiMaterial: String
});

mongoose.model('branches', branchDataSchema);