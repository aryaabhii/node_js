// Os module
const os =  require("os");

console.log("Os Artchicture  : " + os.arch());
console.log("Window User name: " + os.hostname());
console.log("Platform name   : " + os.platform());
console.log("Temp directory  : " + os.tmpdir());
console.log("Os type         : " + os.type());

// It will help to know about free ram space
const freeMemory = os.freemem();
console.log("free memory     : " + `${freeMemory/1024/1024/1024}`)

// It will help to know total size of ram
const totalMemory = os.totalmem();
console.log("total memory    : " + `${totalMemory/1024/1024/1024}`)