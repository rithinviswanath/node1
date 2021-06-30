var express = require("express");
var app = express();
app.listen(3000, () => {
  console.log("Server running on port 5000");
  app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "kurunthodi"]);
  });
});
