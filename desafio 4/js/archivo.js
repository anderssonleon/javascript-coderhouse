let comprasTotales = 0;
let productosAgregados = parseInt(prompt(
    `ELIGUE UNO DE NUESTROS PRODUCTOS:\n 
     1.Adhesivo para rostro  
     2.Paleta 18 sombras rubi rose 
     3.Delineador de ojos de fibra 
     4.Labial exfoliante 
     5.Paleta iluminadora 
     6.Set ariel 
     7.Mascara colageno 
     8.Mascara 2 en DAPOP 
     9.Combo 3 paletas de sombras de ojos 
     10.Mascara descongestiva 
     11.Agua miselar 
     12.delineador liquido 
`))
let seguirComprando;
let agregarOtroProducto = true;
let productos =[]
let productosDesglosados;
let productoNombre;
let productoPrecio;
let productosDesglosadosTotal =[]


/*ACA AGREGAMOS NUEVOS PRODUCTOS POR EL CONSTRUCTOR*/

class Producto{
    constructor(nombre,precio,id){
        this.nombre = nombre
        this.precio = precio
        this.id =id
    }
}
const ahesivo = new Producto("Adhesivo para rostro",849,1)
const paleta = new Producto("Paleta 18 sombras rubi rose",1490,2)
const delineador = new Producto("Delineador de ojos de fibra",3196,3)
const labialExfoliante = new Producto("Labial exfoliante",1598,4)
const paletaIluminadora = new Producto("Paleta iluminadora",999,5)
const setAriel = new Producto("Set ariel ",2399,6)
const mascaraDeColageno = new Producto("Mascara colageno ",987,7)
const mascaraDapop = new Producto("Mascara 2 en DAPOP ",1796,8)
const comboPaletas = new Producto("Combo 3 paletas de sombras de ojos",2699,9)
const mascaraDescongestiva = new Producto("Mascara descongestiva ",1200,10)
const aguaMiselar = new Producto("Agua miselar ",900,11)
const delineadorLiquido = new Producto("delineador liquido",550,12)

/**AFREGANDO PRODUCTOS AL ARRAYS */

productos.push(ahesivo);
productos.push(paleta);
productos.push(delineador);
productos.push(labialExfoliante);
productos.push(paletaIluminadora);
productos.push(setAriel);
productos.push(mascaraDeColageno);
productos.push(mascaraDapop);
productos.push(comboPaletas);
productos.push(mascaraDescongestiva);
productos.push(aguaMiselar);
productos.push(delineadorLiquido);
console.log(productos)


/* meto while para la seleccion del producto */
while (agregarOtroProducto == true) {   
const productoSeleccionado = productos.find(prod=>prod.id===productosAgregados)
 
     
   if (productoSeleccionado) {
    let cantidadDeProductos = parseInt(prompt(`Cuantos productos desea agregar?`))
     if (cantidadDeProductos <= 10) {
         productoNombre = productoSeleccionado.nombre;
         productoPrecio = productoSeleccionado.precio;
        cantidadDeCompras = cantidadDeProductos * productoSeleccionado.precio;
        comprasTotales = comprasTotales + cantidadDeCompras;
        productosDesglosados = [productoSeleccionado.nombre, productoSeleccionado.precio, cantidadDeProductos];
        productosDesglosadosTotal.push(productosDesglosados.join("---------"))
     }
}else{
     productosAgregados = parseInt(prompt(
    `No se selecciono ningun producto existente intente de nuevo
    ELIGUE UNO DE NUESTROS PRODUCTOS:\n 
     1.Adhesivo para rostro
     2.Paleta 18 sombras rubi rose
     3.Delineador de ojos de fibra
     4.Labial exfoliante
     5.Paleta iluminadora
     6.Set ariel
     7.Mascara colageno
     8.Mascara 2 en DAPOP
     9.Combo 3 paletas de sombras de ojos
     10.Mascara descongestiva
     11.Agua miselar
     12.delineador liquido
        `));
        continue
    }
    seguirComprando = prompt(`Desea segir agregando productos?
         1.si - 2.no`)

if (seguirComprando == 1){
    agregarOtroProducto = true;
    productosAgregados=parseInt(prompt(
        `ELIGUE UNO DE NUESTROS PRODUCTOS:\n 
         1.Adhesivo para rostro  
         2.Paleta 18 sombras rubi rose 
         3.Delineador de ojos de fibra 
         4.Labial exfoliante 
         5.Paleta iluminadora 
         6.Set ariel 
         7.Mascara colageno 
         8.Mascara 2 en DAPOP 
         9.Combo 3 paletas de sombras de ojos 
         10.Mascara descongestiva 
         11.Agua miselar 
         12.delineador liquido 
    `))
     
}else if(seguirComprando == 2){
    agregarOtroProducto = false;
}
}
class CalculadoraPrecioFinal{
    constructor(total){
        this.total = total
    }
    valorConDescuento() {
        let descuento = 0;
        if (this.total >= 3000) {
            descuento = 5
        }
        else if(this.total < 3000) {
            descuento = 10
        }else{
            descuento = 15
        }
        let descuentoAgregado = this.total * (descuento/100)
        let total = this.total - descuentoAgregado
         return total
    }
}
const calculadora = new CalculadoraPrecioFinal(comprasTotales)

document.write(`PRODUCTO-----------------PRECIO---CANTIDAD<br>`)
document.write(`${productosDesglosadosTotal.join(`  <br>  `)} <br>`)
document.write(`total de productos agregados al carrito: <b style="color:red ;">${comprasTotales}$</b><br>`);
document.write(`valor con descuento agregado: ${calculadora.valorConDescuento()}$<br>`);





