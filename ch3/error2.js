const fs = require('fs');

setInterval(() => {
    fs.unlink('./adadadad.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);