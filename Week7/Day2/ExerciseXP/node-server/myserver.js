// EX:1


const http = require(`http`);

const server = http.createServer((req,res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> This is my first response </h1>');
    res.write('<h2> This is my second response </h2>');
    res.write('<h3> This is my third response </h3>');
    res.end();
    
})
server.listen(3000);