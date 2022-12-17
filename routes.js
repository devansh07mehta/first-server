// server creation
const http = require("http");
const port = 8081;

const toDoList = ["Need to learn", "Need to code"];

http
    .createServer((req,res) => {  //req=>request res=>response
        const { method, url } = req;
        // console.log(method, url);
        // GET / (method route)
        // GET /favicon.ico // favicon.ico is nothing but fontawesome icons & by default there is a globe icon.
        // res.end();
        if(url === "/todos"){
            // http://localhost:8081/todos
            if(method === "GET"){
                res.writeHead(200, {"Content-Type":"text/html"});
                res.write("<h1>"+toDoList.toString()+"</h1>");
            } else if(method === "POST"){
                let body = "";
                req
                    .on("error", (err) => {
                        console.log(err);
                    })
                    .on('data', (chunk) => {
                        // body = body + chunk;
                        body+=chunk;
                        console.log(chunk);
                        // <Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 64 65 76 61 6e 73 68 22 2c 0a 20 20 22 61 67 65 22 3a 20 32 35 0a 7d> // Hexadecimal digits
                    })
                    .on('end', () => {
                        body = JSON.parse(body);
                        console.log("body data: ",body);
                        // body data:  { name: 'devansh', age: 25 }
                    });
            } else{
                res.writeHead(501); // Status: 501 Not Implemented // For method other than GET 
            }
        } else{
            res.writeHead(404); // Status: 404 Not Found // For different route other than todos
        }
        res.end();
    })
    .listen(port, () => {
        console.log(`My NodeJs server started on port ${port}`);
    });

// http://localhost:8081
// http://localhost:8081/
// http://localhost:8081/home
// http://localhost:8081/aboutUs
// http://localhost:8081/ContactUs
