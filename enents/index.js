// setTimeout(()=>{
//         console.log('alamin');
// },1000);
const fs = require('fs');

const School = require('./school');

const school = new School();

fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
});
console.log('alamin');

// register a listener for bellRing event
school.on('bellRing', ({ period, text }) => {
    console.log(`we need to run! because ${period} ${text}`);
});

school.startPeriod();
console.log('events check');
