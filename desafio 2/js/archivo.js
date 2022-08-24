let comprasTotales = 0;
let totalDeProductos = 0;
let productosAgregados = prompt(
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
let seguirComprando;
let agregarOtroProducto = true;
let productosAlCarrito;

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
                productosAlCarrito = productosAlCarrito * 849;
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
                productosAlCarrito = productosAlCarrito * 1490;
                
                
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
                productosAlCarrito = productosAlCarrito * 3196;
                
                
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
                productosAlCarrito = productosAlCarrito * 1598;
                
                
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
                productosAlCarrito = productosAlCarrito * 999;
                
                
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
                productosAlCarrito = productosAlCarrito * 2399;
                
                
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
                productosAlCarrito = productosAlCarrito * 987;
                
                
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
                productosAlCarrito = productosAlCarrito * 1796;
                
                
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
                productosAlCarrito = productosAlCarrito * 2699;
                
                
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
                productosAlCarrito = productosAlCarrito * 1200;
                
                
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
                productosAlCarrito = productosAlCarrito * 900;
                
                
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
                productosAlCarrito = productosAlCarrito * 550;
                
                
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



function valorTotalConDescuento(valor) {
    let descuento = 0;
    if (valor >= 3000) {
        descuento = 15
    }
    else if(valor < 3000) {
        descuento = 5
    }else{
        descuento = 30
    }
    let descuentoAgregado = valor * (descuento/100)
     valor = valor - descuentoAgregado
     return valor
}

let valorConDescuentoAgreagado = valorTotalConDescuento(productosAlCarrito);

document.write(`valor con descuento agregado ${valorConDescuentoAgreagado}<br>`)




function impuestoAgregado(valorConImpuesto) {
    const impuesto = valorConImpuesto * (12/100)
    return valorConImpuesto + impuesto
}

let valorConImpuestoAgregado = impuestoAgregado(valorConDescuentoAgreagado);

document.write(`valor total con impuesto: ${valorConImpuestoAgregado}`);



