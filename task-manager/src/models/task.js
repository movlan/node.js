const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
