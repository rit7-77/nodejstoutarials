const { json } = require("stream/consumers")

const obj = {
    name:"rahul",
    age:20,
    address:"lucknow"
}

console.log(obj.age)

// Json.stringify   is used to convert the object to json

const json_Data = JSON.stringify(obj);
console.log(json_Data);

//json.parse is convert  json to  object .

const objData = JSON.parse(json_Data);
console.log(objData);

