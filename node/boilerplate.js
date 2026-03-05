const fs = require('fs');
fs.mkdir('Dogs', { recursive: true }, (err) => {
    console.log("IN THE CLLBACK")
    if (err) {
        console.log(err);
    };
});

console.log("AFTER"); 