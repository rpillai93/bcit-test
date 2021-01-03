const express = require("express");
require("dotenv").config();
const connectDB = require("./db");
const path = require("path");
const app = express();

//Connect Database
connectDB();

//Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Define Routes
app.use("/api/numbers", require("./api/numbers"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
