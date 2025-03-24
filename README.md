# Learning Node js

## Installation
-   npm init
-   nodemon
    > npm i -g nodemon
- to run a file
    > nodemon server.js
- download lodash
    > npm i lodash
- Install Express
    > npm i express

-   Read MongoDb Installation.docx
-   To run MongoDB Server 
    > mongod
    to use monggo shell

- to install mongoose
    > npm i mongoose
    
- install body-parser
    > npm i body-parser
## Topics
- 01function.js
    -   Writing function 4 ways
    -   function and callback

- 02modules.js
    - fs and os
    - Lodash

-  03JSON.js
    -   JSON.strigify
    -   JSON.parse

-   04server.js
    - express install
    - basic server running
    -  post request using postman
    -  mongoose better than mongoDB driver for translating between node js and mongoDB

- 05db.js
    - install mongoose
    -  setup connection and export for using in other file
    - creating a post method in 04server.js for sending the data using a async await
    - using postman to send data using "post" method  on  http://localhost:3000/person
      ````    javascript
        {
            "name":"Allice",
            "age":34,
            "mobile":"54545",
            "work":"Manager",
            "address":"sdsd",
            "email":"11@gmail.com",
            "salary":100000
        }
        ````
    - using postman to fetch  data using "get" method on  http://localhost:3000/person by using Person.find()
