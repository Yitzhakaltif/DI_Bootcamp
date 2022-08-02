const fs = require("fs");

// Exercise 1

fs.readFile("./test.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// Exercise 2

// Exercise 2: 1
const txt = "Good morning Vietnam!";

fs.writeFile("./hello.txt", txt, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(txt);
});

// Exercise 2: 2

fs.appendFile("./hello.txt", "Goodnight", (err) => {
  console.log(err);
});

// Exercise 2: 3

fs.unlink("./hello.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File deleted successfully!");
});


