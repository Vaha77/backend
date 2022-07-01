const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const list = require(`./list`);

app.get("./", (req, res, next) => {
  res.json(list);
});

// app.get("/", (req, res) => {
// res.send("salom");
// res.json({
//   name: "Rakhimov",
//   title: "Vaxa",
// });
// res.sendFile("./package.json", { root: __dirname });
// res.download("./bk.jpg");
// });

app.listen(3002, () => console.log("server yurdi"));
