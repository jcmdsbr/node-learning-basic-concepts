const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("User", userSchema);