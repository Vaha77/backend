const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.statusCode = 500;
  res.send("salom becend men keldim");
});

app.listen(5000, () => {
  console.log("server yurdi");
});
