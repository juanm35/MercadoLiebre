const express = require ("express");
const app = express();
const path = require ("path");
const PORT = process.env.PORT || 3000
const publicPath = path.join(__dirname, "./public")
const morgan = require ("morgan")

app.use(express.static(publicPath))

app. listen (PORT, function(){console.log("Se esta corriendo el Servidor en http://localhost:3000")});

app.get("/", function(req,res){res.sendFile(path.join(__dirname,"./views/home.html"))})



