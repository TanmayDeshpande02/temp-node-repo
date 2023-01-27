const { readFileSync,writeFileSync } = require('fs');

const first = readFileSync('./content/subcontent/name.txt','utf-8')
const second = readFileSync('./content/subcontent/second.txt','utf-8')

// console.log(first,second);

writeFileSync('./content/subcontent/result-sync.txt',
`Here the result is :${first},${second}`,{flag:'a'})
