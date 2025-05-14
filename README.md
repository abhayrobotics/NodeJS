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

- installing passport and passport-local for authentication
    > npm i passport passport-local
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

- 05db.js
    - install mongoose
    -  setup connection and export for using in other file


-   04server.js
    - express install
    - basic server running
    -  post request using postman
    -  mongoose better than mongoDB driver for translating between node js and mongoDB

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
    - created a schema or model for mennu item to be stored.
    - using postman to fetch  data using "get" method on  http://localhost:3000/menu by using MenuItem.find()
    -- using postman to send data using "post" method  on  http://localhost:3000/menu
      ````    javascript
        {
        "name":"Chicken Tandoori",
        "price":3400,
        "is_drink":false,
        "taste":"spicy"
        }

    -- parameter based url,  "/person/:workType1"
    ````    javascript
        app.get("/person/:workType1", async (req,res)=>{
        const workType = req.params.workType1;
        //some code
        })
    ````

    - create route folder and as personroute.js and amenuItemRoute.js for clearing the server.js file 

    - update and delete method 
        
    - learning Middleware use logrequest as middleware function.
    ```` js
        const logRequest = (req,res,next)=>{
        console.log(`[${new Date().toLocaleString()}] Request made : ${req.originalUrl} `);
        // always call next or execute any additional middleware and then next() for getting the respose from sever in next phase
        next();

        }
        // using middleware - method -1
        app.use(logRequest);
    ````

    - installing passport and passport-local for authentication