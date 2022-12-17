// server creation
const http = require("http");
const port = 8081;

const toDoList = ["Need to learn", "Need to code"];

http
    .createServer((req, res) => {  //req=>request res=>response
        const { method, url } = req;
        // console.log(method, url);
        // GET / (method route)
        // GET /favicon.ico // favicon.ico is nothing but fontawesome icons & by default there is a globe icon.
        // res.end();
        if (url === "/todos") {
            // http://localhost:8081/todos
            if (method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write("<h1>" + toDoList.toString() + "</h1>");
            } else if (method === "POST") {
                let body = "";
                req
                    .on("error", (err) => {
                        console.log(err);
                    })
                    .on('data', (chunk) => {
                        // body = body + chunk;
                        body += chunk;
                        // console.log(chunk);
                        // <Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 64 65 76 61 6e 73 68 22 2c 0a 20 20 22 61 67 65 22 3a 20 32 35 0a 7d> // Hexadecimal digits
                    })
                    .on('end', () => {
                        body = JSON.parse(body);
                        // console.log("body data: ",body);
                        // body data:  { name: 'devansh', age: 25 }
                        let newToDo = toDoList;
                        newToDo.push(body.item);
                        console.log(newToDo); //[ 'Need to learn', 'Need to code', 'Devansh' ]
                        res.writeHead(201); // The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
                    });
            } else if (method === "DELETE") {
                let body = "";
                req
                    .on('error', (err) => {
                        console.error(err);
                    })
                    .on('data', (chunk) => { //chunk is nothing but stream of bits in hexadecimal numbers created as buffer
                        body += chunk;
                    })
                    .on('end', () => {
                        body = JSON.parse(body);
                        let deleteItem = body.item; //body is nothing but the JSON object which was empty before adding or pushing any item or element & item is a keyword which is used with . operator to access it's value which will be deleted.
                        for (let i = 0; i < toDoList.length; i++) {
                            if (toDoList[i] === deleteItem) {
                                toDoList.splice(i, 1); // it will truncate or delete the item or element matching with the deleteItem & update the toDoList on the UI until the server is re-started.
                                // When the server is restarted then the content on the UI gets refreshed since server is persistent i.e. it does all the necessary operations with the data & displays it but it does not store any kind of data. It will get stored in the database.
                                break;
                            }
                        }
                        res.writeHead(204); //This all are http response status code
                        // 204 No Content
                        // There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.
                    });
            } else {
                res.writeHead(501); // Status: 501 Not Implemented // For method other than GET 
            }
        } else {
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


// CSR 
// Client Side Rendered (in Browser)

// url: http://localhost:8081 (req)
// Server Side Data (res)
// html,css,js (tons of js operations would get carried here)
// all the front-end related computation happens on client side.
// it won't refresh
// faster than SSR => No need to send req again & again as server does not get refreshed.
// low cost of server (bcauz we are not raising a new req for every reload)





// SSR
// Server Side Rendered

// url: http://localhost:8081 (req)
// Server Side Data (res)
// html,css,js
// Server gets refreshed again & agian
// Slow => Again req is taken from the client side(or browser) on refresh, again some operations are performed on data & then the res is send to the client(or browser).