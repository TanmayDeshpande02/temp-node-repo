const path = require('path')

console.log(path.sep);

const filepath = path.join('/content','subcontent','test.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const abs = path.resolve('/content','subcontent','test.txt')
console.log(abs)
