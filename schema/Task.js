const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {type: String, require:true},
    isCompleted: {type: Boolean, require: true},
}, {timestamps:true});

module.exports = mongoose.model("Tasks", taskSchema);