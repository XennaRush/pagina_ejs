import express from "express";
import ejs from "ejs";
import rutas from "./rutas/rutas.js";
import {conectarDB} from "./bd/bd.js";

async function conexionDB() {
    await conectarDB();
}

const app = express();
conexionDB();

// Para recibir datos de formularios
app.use(express.urlencoded({ extended: true }));

// Motor de plantillas
app.set("view engine", "ejs");

// Rutas
app.use("/", rutas);

// Página 404
app.use((req, res, next) => {
    res.status(404).render("404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor en http://localhost:" + PORT);
});
