const fs = require('fs');

const breedDeatailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile');
  fs.readFile(`./data/${breed}.txt`, `utf8`, (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(breed);
  });
};

const printOutCatBreed = breed => {
  console.log("Return Value", breed);
};

breedDeatailsFromFile("Bombay", printOutCatBreed);