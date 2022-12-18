const express = require("express");
const app = express(); // initialization
app.use(express.json()); // appln will now use json format for the data transfer.
const port = 8081;
const toDoList = ["Need to learn","Need to code"];

app.get("/todos", (req,res) => {  // http://localhost:8081/todos //get method 
    res.status(200).send(toDoList);
});

app.post("/todos", (req,res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "New Todo got added successfully"
    });
});

app.delete("/todos", (req,res) => {
    const itemToDelete = req.body.item;

    toDoList.find((element, index) => {
        if(element === itemToDelete){
            toDoList.splice(index, 1);
        }
    });
    res.status(202).send({ // 202 Accepted - The request has been accepted for processing, but the processing has not been completed. 
        message : `Deleted item - ${itemToDelete}`
    });
});

app.all("/todos", (req, res) => {
    res.status(501).send(); // 501 - Not Implemented
});

app.all("*", (req, res) => {  // Here the hierarchy matters. If this method is at the top then it will not even work with correct routes & correct methods used i.e. which are implemented by us i.e. get, post , delete. 
    res.status(404).send(); // 404 - Page Not Found
});
// app.get("/todos/created");
// app.get("/todos/deleted");

app.listen(port, () => {
    console.log(`Express Js started at port ${port}`);
});