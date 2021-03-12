let input = process.argv.slice(2);
var fs = require('fs');
const bigLineBreaks = require('./commands/bigLineBreaks');
const defaultShowData = require('./commands/defaultShowdata');
const giveNumbers = require('./commands/giveNumbers');
const nonEmptyNumber = require('./commands/nonEmptyNumber');

let options = input[0]
if (options == '-s' || options == '-n' || options == '-b') {
    let dirpath = input[1]
    if (input.length <= 2) {
        switch (options) {
            //3- node wcat.js -s filepath => convert big line breaks into a singular line break
            case '-s':
                bigLineBreaks(dirpath);
                break;
            //4 - node wcat - n filepath => give numbering to all the lines
            case '-n':
                giveNumbers(dirpath)
                break
            // 5- node wcat -b filepath => give numbering to non-empty lines
            case '-b':
                nonEmptyNumber(dirpath)
                break
            default:
                console.log('Enter A Valid Option');
                break;
        }
    } else {

        if (input.length == 3 && input[0] == '-n' && input[1] == '-s') {
            let path = input[2]
            bigLineBreaks(path)
            giveNumbers(path)
        }
        else if(input.length == 3 && input[1] == '-n' && input[0] == '-s'){
            let path = input[2]
            bigLineBreaks(path)
            giveNumbers(path)
        }
        else if (input.length == 3 && input[0] == '-n' && input[1] == '-b') {
            let path = input[2]
            giveNumbers(path)
        }
        else if (input.length == 3 && input[0] == '-b' && input[1] == '-n') {
            let path = input[2]
            nonEmptyNumber(path)
        }
        else {
            console.log('Enter A Valid Option');
        }
    }
} else {
    //1- node wcat.js filepath => displays content of the file in the terminal 
    //2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
    defaultShowData(input);
}
