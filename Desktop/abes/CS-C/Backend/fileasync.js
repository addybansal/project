// const fspromises = require("fs/promises");
// // const fspromises = require("fs/").promises;
// const read= async ()=>{
// try{
//        const data = await fspromises.readFile("./data.txt","utf8");
//    console.log(data)
// }catch(error){
// console.log(error.message);
// }
    
// }
// read();
// console.log("fisrt")




const fspromises = require("fs/promises");
// const fspromises = require("fs/").promises;
const write = async () => {
  try {
    const newdata ="this is my new work"
    await fspromises.writeFile("./data2.txt", newdata, "utf8");
  } catch (error) {
    console.log(error.message);
  }
};
write();
console.log("fisrt");

