const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/subcontent/name.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/subcontent/second.txt', 'utf8', (err, result) => {
    if (err) {

      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/subcontent/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {

          console.log(err)
          return
        }
        console.log(result)
      }
    )
  })
})
// console.log('starting next task')