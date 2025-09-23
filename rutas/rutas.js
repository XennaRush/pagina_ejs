import { Router } from "express";
const router = Router()

router.get("/", (req, rest)=>{
    rest.render("index")
})

router.get("/contactanos", (req, rest)=>{
    rest.render("contactanos")
})

router.get("/usuarios", (req, rest)=>{
    rest.render("usuarios")
})

router.get("/abc", (req,res)=>{
    res.send("Estas en abc")
})

export default router