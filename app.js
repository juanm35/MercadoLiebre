const express = require ("express");
const app = express();
const path = require ("path");
const puerto=process.env.PORT || 3000
const publicPath = path.join(__dirname, "./public")


app.use(express.static(publicPath))

app. listen (puerto, function(){console.log("Se esta corriendo el Servidor en http://localhost:3000")});

app.get("/", function(req,res){res.sendFile(path.join(__dirname,"./views/home.html"))})



