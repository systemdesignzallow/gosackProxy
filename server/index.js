const express = require("express");
const getHouse = require("./requests/getHouse");
const app = express();
const serviceUrl = "http://localhost:6001";
const layout = require("../templates/layout");
const body = require("../templates/body");
const scripts = require("../templates/scripts");
const PORT = 6003;

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
