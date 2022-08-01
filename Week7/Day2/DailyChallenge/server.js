const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/aboutMe/:hobby", (req, res) => {
  let log = req.params;
  if (typeof log.hobby === "string" || log.hobby instanceof String) {
    res.send(log.hobby);
    console.log(log.hobby);
  } else {
    res.status(404);
  }
});

app.use("/form", express.static(__dirname + "/public/"));
app.use("/pic", express.static(__dirname + "/public/pic.html"));

app.post("/formData", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.email} sent you a message: ${req.body.msg}`);
});