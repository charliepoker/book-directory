const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./router/Book");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}. 😎😎`);
});

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Database is connected 🎉🎉`);
  })
  .catch((err) => {
    console.log(err.message);
  });
