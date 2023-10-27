const express = require("mysql");
const connection = mysql.createConnection({
   host : "localhost",
   user:"notebook",
   password:"*******",
   database: "notebook",
});
connection.connect((error)=> {
    if (error){
        console.error("error connecting to the databasa:", error);

    }
    else{
        console.log("connected to the database");
    }
});