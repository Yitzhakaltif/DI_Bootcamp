const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const data = {
  message: "It me Mario!",
};

const parsedData = JSON.stringify(data);

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get("/api/hello", (req, res) => res.end(parsedData));

app.post("/api/world", (req, res) => {
  console.log(req.body);
});