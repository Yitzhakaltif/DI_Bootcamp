const http = require(`http`);

const server = http.createServer((req, res)=>{
   console.log(`hello hi`);
    res.end(`hello my first server`)

})
server.listen(5000)