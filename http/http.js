const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('server creating');
    if (req.url === '/') {
        fs.readFile('../index.html', (err, data) => {
            res.write(data);
            res.write(' how are you ');
            res.end();
        });
    } else if (req.url === '/about-us') {
        res.write('this is about page');
        res.end();
    } else {
        res.write('not found');
        res.end();
    }
});

server.listen(3000);

console.log('listening server on 3000 port');
