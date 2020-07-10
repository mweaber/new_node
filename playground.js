const fs = require('fs');

// fs stands for File System

const file = fs.readFileSync('./lib.js', {encoding:'utf-8'}).toString()
// Reads the file in the path and will print to a string
console.log(file);

// fs.writeFileSync('./lib.js', 'var me = "me"');
// Overwrites the file in path with whatever is included in the args

// Node module templating is sort of how the write file works, similar to the Angular generate component. It will have a default template that once we execute the commands applies our options to the default and creates/saves as a valid file. 

const path = require('path');

console.log(path.join('../../hello', 'app/', '../things'));
