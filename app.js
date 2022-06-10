console.log("funciona")


let formulario = document.querySelector(#formulario)
formulario.addEventListener("submit",(e)=>) {
    e.preventDefault()

    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let telefono = document.querySelector("#telefono").value
    let email = document.querySelector("#email").value
    let solicitudAyuda = document.querySelector("#solicitudAyuda").value

    enviarDatos(datos)

}


const enviarDatos = async (datos) => {
    let respuesta = await fecth ("fundacionBR.com/cargardatos",{
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            datos
        }
    })
}