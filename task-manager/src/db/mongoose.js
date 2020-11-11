const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/task-manager-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Connected to database");
  }
);
