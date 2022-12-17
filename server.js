// server creation
const http = require("http");
const port  = 8081; 

// const port  = 8082; 
// port no. 8082 also working fine but use default one 8081 as it is free, no load upon it.
http
    .createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text/html"}); 
    // 200 OK
    // Standard response for successful HTTP requests.

    // res.writeHead(401, {"Content-Type":"text/html"}); 
    // 401 Unauthorized
    // Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. 401 semantically means "unauthorised", the user does not have valid authentication credentials for the target resource.

    res.write("<h2>Hello, this is from my new server which is create by devansh mehta</h2>");
    res.end();
    })
    .listen(port, () => {
    console.log(`My NodeJs server started on port ${port}`);
    });

    // http://localhost:8081
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