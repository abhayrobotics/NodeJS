const json = {
    "name":"Abhay Kumar",
    "age":30,
    "Hobbies": ["movies","chess"]
}

console.log(json)

// Json to string

const str = JSON.stringify(json)
console.log(str)

// Str to json

const json2 = JSON.parse(str)
console.log(json2)
