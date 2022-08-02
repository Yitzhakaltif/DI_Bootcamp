const fs = require(`fs`);

fs.readFile(`./RightLeft.txt`, `utf-8`, (err, data) =>{
    if (err) {
        console.log(err);
      } else {
        let file = data.toString();
        let position = 0;
        let steps = 0;
        let first = 0;
        for (let i = 0; i < file.length; i++) {
          steps++;
          if (file[i] === `>`) {
            position++;
          } else {
            position--;
          }
          if (position === -1 && first === 0) {
            console.log(`first time in left side is in ${steps} steps`);
            first = 1;
          }
        }
        console.log(`total steps: ${position}`);

      }

    });