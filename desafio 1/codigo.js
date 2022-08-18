/** un registro de usuario al no gregar el usuario correcto y passworld al 3 intento saldra del bucle*/

let usuario = prompt("su nuevo usuario")
let contrase = prompt("su nueva contraseña")
alert("usuario registrado")
for (let i = 0; i < 3; i++) {
    user1 = prompt("agrege su usuario");
    passworld = prompt("agrege su contraseña")
    if (user1 === usuario && passworld === contrase) {
        alert("bienvenido a su la cuenta")
        break
    }
    alert("usuario o contraseña incorrecta")
}
alert("ha su perado los 3 intentos!");