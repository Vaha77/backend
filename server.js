const express = require("express");

const app = express();

app.use("/users", (req, res) => {
  res.statusCode = 500;
  // res.send("salom becend men keldim");
  res.json({
    categoryId: 0,
    city: "string",
    componentsDto: {
      additional: "string",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "",
    description: " ",
    favorite: true,
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
    },
    houseDetails: {
      area: "",
      bath: "",
      beds: "",
      garage: "",
      room: "",
      yearBuilt: "",
    },
  });
});

app.listen(5000, () => {
  console.log("server yurdi");
});
