const fs = require('fs');

const ourReadStream2 = fs.createReadStream(`${__dirname}/big_data.txt`);

const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
const pipeWriteStream = fs.createWriteStream(`${__dirname}/pipeOutput.txt`);

ourReadStream2.on('data', (chunk) => {
    console.log(chunk.toString());
    ourWriteStream.write(chunk);
});

ourReadStream2.pipe(pipeWriteStream);
console.log('start streaming');
