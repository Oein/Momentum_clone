const express = require("express");
const app = express();

app.use("/", express.static("public"));

app.listen(5500, () => {
  console.log("listening on http://127.0.0.1:5500");
});
