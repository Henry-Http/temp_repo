const os = require("os");

//get user info
const user = os.userInfo();

// console.log(user)

const convertUptime = (uptime) => {
    let total =  uptime / 60;
    let total2 = total / 60;
    let total3 = total2 / 24;
    console.log(total3);

};

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}


// console.log(`system uptime: ${os.uptime()}`);

convertUptime(os.uptime())
console.log(currentOs);