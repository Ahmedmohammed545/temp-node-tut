const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/subfolder/result.txt', `Here is where the result is located`, {flag:'a'})

