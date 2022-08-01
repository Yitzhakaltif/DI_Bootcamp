//EX:2

const http = require(`http`);

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.end(JSON.stringify(user));
})
server.listen(8080);