//Part 1

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values);
  }, error => {
    console.log(error)
  });




// I couldn't manage to do part 2 of the DailyChallenge ...







