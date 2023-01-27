const os = require('os')

// info about current user
console.log(`${os.userInfo}`);
console.log(`${os.uptime}`);

const current = {
    name: os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(current);
