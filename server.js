// server creation
const http = require("http");
const port  = 8081; 

// const port  = 8082; 
// port no. 8082 also working fine but use default one 8081 as it is free, no load upon it.

// http methods

// Get => It helps to get certain details from server / default method / & it can directly work on any browser.
// Put => Overwrites, fully update the details
// Delete => It helps to delete certain data from the server.
// Patch => It helps to update certain fields / very few fields.
// Post => This method helps to send the data to the server by hiding it in the url. It is mainly used in certain authentication pages.(like login, register).

http
    .createServer((req,res) => {
        res.writeHead(200, {"Content-Type":"text/html"}); 
     // 200 OK - Positive Signal
     // Standard response for successful HTTP requests.

     // res.writeHead(401, {"Content-Type":"text/html"}); 
     // 401 Unauthorized
     // Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. 401 semantically means "unauthorised", the user does not have valid authentication credentials for the target resource.

        res.write("<h2>Hello, this is from my new server which is create by devansh mehta</h2>");
        res.end();
    })
    .listen(port, () => {
        // .listen will listen the request from the browser or client & respond appropriately using res.write method.
        console.log(`My NodeJs server started on port ${port}`);
    });

    // http://localhost:8081
    // http://localhost:8081/

    // Routes 
    // http://localhost:8081/home
    // http://localhost:8081/aboutUs
    // http://localhost:8081/contactUs


    // nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

    // Commands for npm
    // npm init
    // node file_name // node server.js
    // nodemon file_name // nodemon server.js
    // npm in-built_key_name
    // npm run key_name // npm run dev
    // Ctrl+C to close the server

    // If u delete node_modules & package-lock.json that are the nodemon files then 
    // write command as npm i which stands for node package manager install
    // Then it installs the missing file which recalls from package.json dependencies & installs all the dependencies which are missing.