require("newrelic");
const express = require("express");
const path = require("path");
const app = express();
// do env vars
const PORT = 6003;

app.use(express.static("./public"));

app.get("/houses/:houseId", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`proxy on http://localhost:${PORT}`);
});
