import { Router } from "express";
import {contactanosNuevo, mostrarContactos, buscarNombre, buscarId, editarContacto, borrarContacto} from "../bd/contactanosBD.js";
const router = Router();

// Página principal
router.get("/", (req, res) => {
    var nombre = "Jose";
    var grupo = "DSS01SM-24";
    var desayunos = ["Queso", "Nueces", "Cereal", "Mango"];

    res.render("index", { nombre, grupo, desayunos });
});

// Contactanos (GET -> muestra formulario de contacto)
router.get("/contactanos", (req, res) => {
    res.render("contactanos");
});

// Usuarios
router.get("/usuarios", (req, res) => {
    res.render("usuarios");
});

// Ruta con parámetro
router.get("/abc/:nombre", (req,res) => {
    var nombre = req.params.nombre;
    console.log(nombre);
    res.render("otro", { nombre });
});

// Recibir datos desde formulario de "otro.ejs"
router.post("/otro", (req, res) => {
    var nombre = req.body.nombre;
    var edad = req.body.edad;
    console.log("Nombre: " + nombre + " Edad: " + edad);
    contactanosNuevo(req.body);
    // res.render("datosFrm", { nombre, edad });
    res.end()
});

router.get("/mostrar_contactos", async(req, res) => {
    const contactosMongo = await mostrarContactos();
    res.render("mostrar_contactos", {contactosMongo});
});

router.post("/buscar", async(req, res) => {
    const buscar = req.body.buscar;
    const contactosMongo = await buscarNombre(buscar);
    console.log(contactosMongo);
    res.render("mostrar_contactos", {contactosMongo});
})

router.get("/editarContacto/:id", async (req, res) => {
    const id = req.params.id;
    const contactoMongo = await buscarId(id);
    res.render("editarContacto", {contactoMongo});
})

router.post("/editarContacto", async (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const respuesta = await editarContacto(req.body);
    console.log(respuesta);
    res.redirect("/mostrar_contactos");
})

router.get("/borrarContacto/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await borrarContacto(id);
    res.redirect("/mostrar_contactos");
})

export default router;