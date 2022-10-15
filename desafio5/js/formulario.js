window.onload = function() {
    $('#onload').fadeOut();
    $('body').remove('hidden')

}

const divRemove = document.getElementById('divRemove')
const divDatos = document.getElementById('divDataId');
const inputNombre = document.getElementById('nombre');
const inputUsuario = document.getElementById('usuario');
const inputEmail = document.getElementById('email');
const btn = document.getElementById('botton');
const divSaludo =document.getElementById('welcome')
const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



eventos()



function eventos() {
    document.addEventListener('DOMContentLoaded',btnDisabled)
    inputNombre.addEventListener('blur',formularioEnviar)
    inputUsuario.addEventListener('blur',formularioEnviar)
    inputEmail.addEventListener('blur',formularioEnviar)
    divDatos.addEventListener('submit',enviarEmail)
}
function btnDisabled() {
    btn.disabled = true;
}

function formularioEnviar(e) {
   if (e.target.value.length > 1) {
    const error = document.querySelector('p.error')
    if (error) {
        error.remove()
        e.target.classList.add('valido')
        
    }
   }else{
    e.target.classList.remove('valido')
     e.target.classList.add('invalido')
     mensajeError(`llenar todos los campos para continuar`)
   }
   if (e.target.type === 'email') {
      if (expresion.test(e.target.value)){
        const error = document.querySelector('p.error')
          if (error) {
            error.remove()
            e.target.classList.add('valido')
            
         }
      }else{
        e.target.classList.remove('valido')
        e.target.classList.add('invalido')
        mensajeError('email no es valido!')
      }
   }
   if (expresion.test(inputEmail) !==" " & inputNombre !==" " & inputUsuario !==" ") {
    btn.disabled = false;
}

}


function mensajeError(mensaje) {
    const errorMensaje = document.createElement('p')
    errorMensaje.textContent = mensaje
    errorMensaje.classList.add('mensajeInvalido','error')


    const errores = document.querySelectorAll('.error')
       
        if (errores.length === 0) {
            divDatos.appendChild(errorMensaje)
        }
}
function enviarEmail(e) {
    e.preventDefault()
    const loader = document.getElementById('spinner')
    loader.style.opacity = 1

    setTimeout(()=>{
        loader.style.opacity = 0
        divRemove.remove()
        const usuario={
            usuario:inputUsuario.value,
            nombre:inputNombre.value,
            email:inputEmail.value
        }
        localStorage.setItem('usuarioStorage', JSON.stringify(usuario));
        welcome(usuario)
    },2000
    )
}

function welcome(user) {
    const saludarTitle = document.createElement('div')
    saludarTitle.classList.add('divWelcome')
    saludarTitle.innerHTML =`
    <div class="divresponsive__divWelcome">
    <h2 class="H2__divWelcome">BIENVENIDO!</h2>
    <p class="p__divWelcome">Hola! ${user.usuario} eres parte de nuestra comunidad!</p>
    <a href="carrito.html"><button class="btn w-50  btn btn-outline-info">bienvenido</button></a>
       </div>
    `
    divSaludo.append(saludarTitle)
}
