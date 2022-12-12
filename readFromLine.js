const readLine = require("readline")

const interface = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

interface.question("Please Enter Your Name ",(name)=>{
    console.log(`Hello ${name}`);
    interface.close()
})
