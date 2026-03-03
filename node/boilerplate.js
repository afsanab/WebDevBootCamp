const fs = require('fs');
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    };
});