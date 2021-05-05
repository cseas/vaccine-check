const express = require("express");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const mockResponse = {
  centers: [
    {
      center_id: 589744,
      name: "Dadabadi UCHC (18-44 Yrs)",
      address: "Dadabadi UCHC",
      state_name: "Rajasthan",
      district_name: "Kota",
      block_name: "Urban",
      pincode: 324009,
      lat: 25,
      long: 75,
      from: "09:00:00",
      to: "18:00:00",
      fee_type: "Free",
      sessions: [
        {
          session_id: "697c7ad8-001a-4ba9-aceb-9dc0c03a2b45",
          date: "06-05-2021",
          available_capacity: 0,
          min_age_limit: 18,
          vaccine: "COVISHIELD",
          slots: [
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-06:00PM",
          ],
        },
      ],
    },
  ],
};

app.get("/mock", function (req, res) {
  res.json(mockResponse);
});

app.listen(3001, () => console.log("> Mock server ready at port: 3001"));
