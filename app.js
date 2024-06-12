//set up the server
const express = require("express");
// const db = require("./db/db_connection");
const app = express();
const port = 3000;

// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + "/public"));

app.set("public", __dirname + "/public");

// configures express to parse URL encoded Post request bodies
app.use(express.urlencoded({extended: false}));


// start the server
app.listen(port, () => {
    console.log(
        `App server listening on ${port}. (Go to http://localhost:${port})`
    );
});