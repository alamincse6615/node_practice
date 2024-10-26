const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server creating');
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /> <button type="submit">Submit</button></form></body>'
        );
        res.end();
    } else if (req.url === '/about-us') {
        res.write('this is about page');
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('stream finished');
           const parseBody = Buffer.concat(body).toString();
           console.log(parseBody);
           console.log('done finished');
        });
        res.write('Thank you for submitting');
        res.end();
    } else {
        res.write('not found');
        res.end();
    }
});

server.listen(3000);

console.log('listening server on 3000 port');
