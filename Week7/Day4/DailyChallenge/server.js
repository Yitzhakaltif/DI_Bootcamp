const express = require("express");
const app = express();
const port = 5002;
const fs = require("fs");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/login", express.static(__dirname + "/public/login.html"));
app.use("/register", express.static(__dirname + "/public/register.html"));

// FS file

let array = [];
app.post("/users", (req, res) => {
  console.log(req.body);
  let user = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  array.push(user);
  res.send("Your account is now created!");
  let string = JSON.stringify(array, null, 2);
  fs.writeFileSync("./users.txt", string, (err) => {
    if (err) {
      console.log(error);
    }
  });
});

app.post("/logged", (req, res) => {
  fs.readFile("./users.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
      let parse = JSON.parse(data);
      for (let i = 0; i < parse.length; i++) {
        console.log(parse[i].username);
        if (
          req.body.username === parse[i].username &&
          req.body.password === parse[i].password
        ) {
          res.send(`Welcome back ${req.body.username}`);
        } else if (
          req.body.username === parse[i].username &&
          req.body.password != parse[i].password
        ) {
          res.send("Wrong password!");
        } else if (req.body.username != parse[i].username) {
          res.send("This user doesn't exist!");
        }
      }
    }
  });
});