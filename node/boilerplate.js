const fs = require('fs');
const foldername = process.argv[2] || 'Project';
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CLLBACK")
//     if (err) {
//         console.log(err);
//     };
// });

fs.mkdirSync(foldername);
fs.writeFileSync(`${foldername}/index.html`, '');
fs.writeFileSync(`${foldername}/app.js`, '');
fs.writeFileSync(`${foldername}/styles.css`, '');

