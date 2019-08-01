require("newrelic");
const express = require("express");
const path = require("path");
const app = express();
// do env vars

app.use(express.static("./public"));

app.get("/houses/:houseId", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(3000, () => {
  console.log("proxy on http://localhost:3000");
});
