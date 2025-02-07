const fs = require('fs');
const read=()=>{
    fs.readFile("./data.txt","utf-8",(error,data)=>{
        if(error){
            console.error("error reading file:" , error);

        }
        else{
            console.log("File content:",data);
        }
    });

}
module.exports = read;
