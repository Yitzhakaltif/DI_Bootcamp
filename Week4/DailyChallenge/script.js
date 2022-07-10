const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];



   let userNameArray = [];

gameInfo.forEach((v) => userNameArray.push(v.username + "!"));
console.log(userNameArray);
//part 2

let user = [];
gameInfo.forEach((v) => (v.score > 5 ? user.push(v.username) : v));

console.log(user);

sumOfScore = 0;
gameInfo.forEach((v) => (sumOfScore += v.score));

console.log(sumOfScore);


