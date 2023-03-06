const fs = require('fs');
const newFolder = process.argv[2] || 'Project';

const readable = fs.createReadStream('template.html');
// Creates a new Directory
fs.mkdirSync(newFolder);

// Writes a file to the newly-created directory:

/*
fs.writeFileSync(`${newFolder}/index.html`, '');
fs.writeFileSync(`${newFolder}/styles.css`, '');
fs.writeFileSync(`${newFolder}/main.js`, '');

*/

/*
Better to use synchronous methods because in 
Node.js, it's bad form to block operations
*/

const files = ['template.html', 'template.js', 'template.css'];

let test1 = fs.readFileSync('template.html', 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});
let test2 = fs.readFileSync('template.css', 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});
let test3 = fs.readFileSync('template.js', 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

fs.writeFile(`${newFolder}/index.html`, test1, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`New HTML template created.`);
    }
});

fs.writeFile(`${newFolder}/styles.css`, test2, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`New style sheet created.`);
    }
});

fs.writeFile(`${newFolder}/main.js`, test3, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`New JS file created.`);
    }
});
