const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  // res.send("salom");
  res.json({
    name: "Rakhimov",
    title: "Vaxa",
  });
});

app.listen(3002);
