const fs = require("fs");
//fs modules is  used to create a new file. and it can perform  4 operation 
//update,post ,read,delete
fs.writeFile("file.txt","data is added to file",()=>{
    console.log("data is added successfully")
})
console.log("simply is subscribe")
//simply is suvscribe
//data is added successfully 
// it is because of non blocking model
const num = fs.writeFileSync("file2.txt", "data is added to the file 2");
console.log(num);
console.log("subscribe to filesync");


//it is used to read the file.
fs.readFile("file2.txt","utf-8",(err,data)=>{
    console.log(err);
})

//appendfile:- it is used to update the file
fs.appendFile("file.txt","data is not supported",(err,data)=>{
console.log(data);
});

//it is used to rename the file .
fs.rename("file.txt","rahul.txt",(data)=>{
console.log(data);
})
// it is used to  delete the  file.
fs.unlinkSync("file2.txt");