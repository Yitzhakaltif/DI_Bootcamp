const robots = [
    {
      id: 1,
      name: "Leanne Graham ",
      username: "Bret ",
      email: " Sincere@april.biz",
      image: "https://robohash.org/1?200x200 ",
    },
    {
      id: 2,
      name: "Ervin Howell ",
      username: "Antonette ",
      email: " Shanna@melissa.tv ",
      image: "https://robohash.org/2?200x200",
    },
    {
      id: 3,
      name: "Clementine Bauch ",
      username: "Samantha ",
      email: " Nathan@yesenia.net",
      image: "https://robohash.org/3?200x200",
    },
    {
      id: 4,
      name: "Patricia Lebsack ",
      username: "Karianne ",
      email: " Julianne.OConner@kory.org",
      image: "https://robohash.org/4?200x200",
    },
    {
      id: 5,
      name: "Chelsey Dietrich ",
      username: "Kamren ",
      email: " Lucio_Hettinger@annie.ca",
      image: "https://robohash.org/5?200x200",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist ",
      username: "Leopoldo_Corkery ",
      email: " Karley_Dach@jasper.info",
      image: "https://robohash.org/6?200x200",
    },
    {
      id: 7,
      name: "Kurtis Weissnat ",
      username: "Elwyn.Skiles ",
      email: " Telly.Hoeger@billy.biz",
      image: "https://robohash.org/7?200x200",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V ",
      username: "Maxime_Nienow ",
      email: " Sherwood@rosamond.me",
      image: "https://robohash.org/8?200x200",
    },
    {
      id: 9,
      name: "Glenna Reichert ",
      username: "Delphine ",
      email: " Chaim_McDermott@dana.io",
      image: "https://robohash.org/9?200x200",
    },
    {
      id: 10,
      name: "Clementina DuBuque ",
      username: "Moriah.Stanton ",
      email: " Rey.Padberg@karina.biz",
      image: "https://robohash.org/10?200x200",
    },
    {
        id: 11,
        name: "Mike Ross ",
        username: "Mike.Ross ",
        email: " Ross.Mike@pearson.specter",
        image: "https://robohash.org/6IP.png?set=set1",
      },
      {
        id: 12,
        name: "Harvey Specter ",
        username: "Harvey.Specter ",
        email: " Specter.Harvey@Pearson.litt",
        image: "https://robohash.org/NFF.png?set=set2",
      }
  ];
  function displaying(event) {
    event.preventDefault();
    //   const main = document.getElementById("main");
    robots
      .filter(
        (v) => !v.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      .forEach((v) => document.getElementById(v.id).classList.add("hidden"));
    robots
      .filter((v) =>
        v.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      .forEach((v) => document.getElementById(v.id).classList.remove("hidden"));
  }
  
  function robotPage() {
    let robotName = Object.entries(robots);
    let body = document.body;
    let navBar = document.createElement("nav");
    let navText = document.createTextNode("ROBOFRIENDS");
    let search = document.createElement("input");
    search.setAttribute("type", "text");
    search.setAttribute("placeholder", "search");
    navBar.setAttribute("class", "navbar");
    search.setAttribute("class", "search");
    navBar.append(navText);
    navBar.append(search);
    body.append(navBar);
    let section = document.createElement("section");
    section.setAttribute("class", "container");
    body.append(section);

    function loop() {
      for (let i = 0; i < robotName.length; i++) {
        let textValue;
        let robotImage = robotName[i][1][`image`];
        let roboName = robotName[i][1][`name`];
        let roboEmail = robotName[i][1][`email`];
        let div = document.createElement(`div`);
        let img = document.createElement(`img`);
        search.addEventListener(`keyup`, check);
        div.append(img);
        div.append(roboName);
        div.append(roboEmail);
        img.setAttribute(`src`, robotImage);
        div.setAttribute(`class`, `card`);
        div.setAttribute(`data-id`, [i]);
        section.append(div);
        textValue = div.textContent;
        console.log(div.innerText);
        
        function check() {
          if (textValue.indexOf(search.value) > -1) {
            div.style.display = ``;
          } else {
            div.style.display = `none`;
          }
       }
      }
    }
    loop();
 }
  robotPage();