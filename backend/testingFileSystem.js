const fs = require("fs"); // File System -> To manipulate files.

const currentData =  JSON.parse( fs.readFileSync("./data/books.json") );
const newData = { id: '3', name: 'Great Book' };

fs.writeFileSync("./data/books.json", JSON.stringify([ ...currentData, newData ]));

console.log(JSON.parse(fs.readFileSync("./data/books.json")));
