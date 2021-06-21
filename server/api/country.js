const express = require("express");
const router = express.Router();
const axios = require("axios");

router
  .route("/")
  .get(async () => {
    axios.get('https://countriesnow.space/api/v0.1/countries/states')
      .then(function (response) {
        let fs = require("fs");
        fs.writeFile("country.json", response.data, function(error) {
          if (error) {
            console.log("Error");
          } else {
            console.log("Success");
          }
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

module.exports = router;
