const express = require("express");
const app = express();
const port = 5003;
const fs = require("fs");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/", express.static(__dirname + "/public"));

app.post("/cart", (req, res) => {
  //   let arr = [];
  //   console.log(req.body);
  //   let item = req.body.item;
  //   let amount = req.body.amount;
  //   arr.push(req.body);
  //   console.log(arr);
  //   let newarr = JSON.stringify(arr);
  let string = `${req.body.item}: ${req.body.amount} `;
  fs.appendFileSync("./cart.txt", string, (err) => {
    if (err) {
      console.log(error);
    }
  });
  fs.readFile("./cart.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
      res.send(data.toString());
    }
  });
});