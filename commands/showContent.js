let fs = require('fs')
module.exports = function (dirpath) {
    fs.readFile(dirpath, 'utf8', function (err, data) {
        if(err)  console.log('Enter a valid file path.\n\n') 
        else console.log(data);
    });
}