const divDatos = document.getElementById('divDataId');
const inputNombre = document.getElementById('nombre');
const inputUsuario = document.getElementById('usuario');
const inputEmail = document.getElementById('email');
const botonWelcome = document.getElementById('botton');
const divSaludo =document.getElementById('welcome')

botonWelcome.onclick = () =>{
     
    const usuario={
        usuario:inputUsuario.value,
        nombre:inputNombre.value,
        email:inputEmail.value
    }
localStorage.setItem('usuarioStorage', JSON.stringify(usuario));
divDatos.remove()

welcome(usuario)
}


function welcome(user) {
    const saludarTitle = document.createElement('h2')


    saludarTitle.innerText = (`Eres parte de nuestras comunidad! te damos la bienvenida ${user.usuario}, explora nuestra tienda dandole continuar al boton`)
    divSaludo.append(saludarTitle)
   
    const bottonSaludar = document.createElement('button')
    bottonSaludar.classList.add("bottn__carrito")


    const alinck = document.createElement('a')
    alinck.setAttribute('href',"carrito.html")
    alinck.textContent = ('continuar')
    bottonSaludar.append(alinck)

   

    divSaludo.append(bottonSaludar)
    
}
