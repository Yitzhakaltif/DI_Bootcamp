//Part 1
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

function getHonda(carInventory) {
  const the1stHonda = inventory.find((item) => item.car_make == carInventory);
  console.log(
    `This is a ${the1stHonda.car_make} ${the1stHonda.car_model} from ${the1stHonda.car_year}`
  );
  return the1stHonda;
}

getHonda("Honda");

//Part 2
function sortCarInventoryByYear(inventory) {
   const sortInventory = inventory.sort((year, year2) => year.car_year - year2.car_year);
   console.log(sortInventory);
return sortInventory;
}
sortCarInventoryByYear(inventory);





    




 
