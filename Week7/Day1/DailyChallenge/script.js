let main = require(`./main.js`);

const b = 5;

main = main.largeNumber;

console.log(main + b);

const http = require(`http`);

const server = http.createServer((req, res)=>{
    console.log("I'm listening");
     res.setHeader('Content-Type', 'text/html')
     res.end(`My Module is ${main+b}\n <html><body><h1>Hi there at the frontend</h1></body></html>`)
    
 });
 server.listen(3000);