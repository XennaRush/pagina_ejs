import Contactanos from "../models/contactanos.js"

export async function contactanosNuevo({nombre, edad}){
    try{
        const contactanosObj = new Contactanos({nombre, edad})
        console.log("-----------------------------------------")
        console.log(contactanosObj)
        console.log("-----------------------------------------")
        const respuestaMongo = await contactanosObj.save()
        console.log("El registro se guardó en Mongo")
    }
    catch(err){
        console.log("Error"+err)
    }
}

export async function mostrarContactos(){
    try{
        const contactosMongo = await Contactanos.find()
        // console.log(contactosMongo)
        return contactosMongo
    }
    catch(err){
        console.log("Error"+err)
    }
}

export async function buscarNombre(nombre){
    const contactosMongo = await Contactanos.find({nombre})
    return contactosMongo
}

export async function buscarId(id){
    const contacto = await Contactanos.findById(id)
    return contacto
}

export async function editarContacto({id, nombre, edad}){
    const respuesta = await Contactanos.findByIdAndUpdate(id, {nombre, edad})
    return respuesta
}

export async function borrarContacto(id){
    const respuesta = await Contactanos.findByIdAndDelete(id)
    return respuesta
}