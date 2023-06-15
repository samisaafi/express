const express = require("express");
const daterequire = require("./Views/MiddleWare/date.js");

//init express
const app = express();
//middllware
app.get("/",daterequire, (req, res) => {

});
//
app.get("/home",daterequire, (req, res) => {
    res.sendFile(__dirname+"/Views/home.html");

  });
  app.get("/contact",daterequire, (req, res) => {
    res.sendFile(__dirname+"/Views/contact.html");

  });
  app.get("/service",daterequire,  (req, res) => {
    res.sendFile(__dirname+"/Views/service.html");

  });



//port
app.listen(3000,err=> {
    if (err) {console.log(err)}
else console.log("server is running on http://localhost:3000")
});
