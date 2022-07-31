const {dateTime}=require(`./main.js`)
console.log(dateTime());
let date = dateTime();
const http = require(`http`);

const server = http.createServer((req, res)=>{
    console.log("I'm listening");
     res.setHeader('Content-Type', 'text/html')
     res.end(`<html><body><h1>${date}</h1></body></html>`)
 });
 server.listen(8080);