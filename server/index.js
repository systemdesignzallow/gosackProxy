const express = require("express");
const getHouse = require("./requests/getHouse");
const app = express();
const layout = require("../templates/layout");
const body = require("../templates/body");
const scripts = require("../templates/scripts");
const PORT = 6003;
const serviceUrl = "http://ec2-54-245-184-130.us-west-2.compute.amazonaws.com";

app.use(express.static("./public"));

app.get("/houses/:houseId", (req, res) => {
  const { houseId } = req.params;
  getHouse(serviceUrl, houseId)
    .then(response => {
      res.send(
        layout(
          "Zallow: General Description",
          response.data.style,
          body(response.data.html),
          scripts(serviceUrl, "/app-bundle.js")
        )
      );
    })
    .catch(error => {
      console.error(error);
    });
});

app.listen(PORT, () => {
  console.log(`proxy on http://localhost:${PORT}`);
});
