import express from "express"
import ejs from "ejs"
import rutas from "./rutas/rutas.js"

const app = express()
app.set("view engine", "ejs")
app.use("/", rutas);

const PORT = process.env.PORT || 3000
app.listen(PORT,function(){
    console.log("Servidor en https://localhost:"+PORT)
});