let comprasTotales = 0;
let totalDeProductos = 0;
let productosAgregados = prompt(
    `ELIGUE UNO DE NUESTROS PRODUCTOS:\n 
     1.ADhesivo para rostro  
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
`);
let seguirComprando;
let agregarOtroProducto = true;
let productosAlCarrito;

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}
const ahesivo = new Producto("ADHESIVO PARA ROSTRO",849)
const paleta = new Producto("Paleta 18 sombras rubi rose",1490)
const delineador = new Producto("Delineador de ojos de fibra",3196)
const labialExfoliante = new Producto("Labial exfoliante",1598)
const paletaIluminadora = new Producto("Paleta iluminadora",999)
const setAriel = new Producto("Set ariel ",2399)
const mascaraDeColageno = new Producto("Mascara colageno ",987)
const mascaraDapop = new Producto("Mascara 2 en DAPOP ",1796)
const comboPaletas = new Producto("Combo 3 paletas de sombras de ojos",2699)
const mascaraDescongestiva = new Producto("Mascara descongestiva ",1200)
const aguaMiselar = new Producto("Agua miselar ",900)
const delineadorLiquido = new Producto("delineador liquido",550)

const baseDeProductos =[ahesivo,paleta,delineador,labialExfoliante,paletaIluminadora,setAriel,mascaraDeColageno,mascaraDapop,comboPaletas,mascaraDescongestiva,aguaMiselar]
console.log(baseDeProductos);
baseDeProductos.push(delineadorLiquido);
console.log(baseDeProductos);


while (agregarOtroProducto == true) {   
    if (productosAgregados == 1) {
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[0].precio;
                console.log(productosAlCarrito)
                agregarCantidad = false;
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }

    } 
    else if(productosAgregados == 2){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[1].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }

    }
    else if(productosAgregados == 3){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[2].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }

    }
    else if(productosAgregados == 4 ){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[3].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }
    }
    else if(productosAgregados == 5){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[4].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }

    }
    else if(productosAgregados == 6 ){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[5].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }

    }
    else if(productosAgregados == 7){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[6].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }  
    }
    else if(productosAgregados == 8){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[7].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }

    }
    else if(productosAgregados == 9){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[8].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }
    }
    else if(productosAgregados == 10 ){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[9].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }

    }
    else if(productosAgregados == 11){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[10].precio;
                
                
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }
    }
    else if(productosAgregados == 12){
        let agregarCantidad 
        agregarCantidad = parseInt(prompt(`desea agregar mas de este producto?
         1.si   2.no`));
         if (agregarCantidad == 1 ) {
            agregarCantidad = true;
         }else if(agregarCantidad == 2){
            agregarCantidad = false;
         }else(
            alert(`el caracter no es valido`)
         )
        if (agregarCantidad == true ) {
            productosAlCarrito = parseInt(prompt(`cuantos desea`));
            if (productosAlCarrito <= 10) {
                totalDeProductos = productosAlCarrito + totalDeProductos;
                productosAlCarrito = productosAlCarrito * baseDeProductos[11].precio;
            } else if(productosAlCarrito > 10){
                alert(`maximo de 10 productos`);
            }        
        }
    }
    else{
        productosAgregados = parseInt(prompt(`No se selecciono ningun producto existente intente de nuevo
        ELIGUE UNO DE NUESTROS PRODUCTOS:\n 
     1.ADHESIVO PARA ROSTRO 
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
   
    seguirComprando = prompt(`desea segir agregando productos:
         1.si - 2.no
             `)

if (seguirComprando == 1){
    agregarOtroProducto = true;
    prompt(
        `ELIGUE UNO DE NUESTROS PRODUCTOS:\n 
         1.ADHESIVO PARA ROSTRO 
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
    `);
    productosAgregados 
}else if(seguirComprando == 2){
    agregarOtroProducto = false;
}
 
}

document.write(`total de productos agregados: <b style="color: red;">${totalDeProductos}</b><br>`);
document.write(`total del costo de productos agregados al carrito ${productosAlCarrito}<br>`);

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
const calculadora = new CalculadoraPrecioFinal(productosAlCarrito);

document.write(`valor con descuento agregado ${calculadora.valorConDescuento()}<br>`);




