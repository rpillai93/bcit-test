const mongoose = require("mongoose");
// const config = require("config");

var url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@uu-game-cluster.9lzhz.mongodb.net/bcit_test`;
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected....");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB; //export connectDB function
