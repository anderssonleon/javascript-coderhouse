window.onload = function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden')

}
class Producto{
    constructor(nombre,precio,id,cantidad,img){
        this.nombre = nombre
        this.precio = precio
        this.id =id
        this.cantidad = cantidad
        this.img = img
    }
}
const ahesivo = new Producto("Adhesivo para rostro",849,1,1,"./photos/dapop.jpeg")
const paleta = new Producto("Paleta 18 sombras rubi rose",1490,2,1,"./photos/paleta.jpg")
const delineador = new Producto("Delineador de ojos de fibra",3196,3,1,"./photos/dapopdelinador.png")
const labialExfoliante = new Producto("Labial exfoliante",1598,4,1,"./photos/labialrubi.jpeg")
const paletaIluminadora = new Producto("Paleta iluminadora",999,5,1,"https://d2r9epyceweg5n.cloudfront.net/stores/206/907/products/makeup-revolution-paleta-rubores-contorno-iluminador-coral-905211-mla20515659063_122015-f-caf058e212c3ffac8d89fee75be2e620-1024-1024.jpg")
const setAriel = new Producto("Set ariel ",2399,6,1,"https://i.pinimg.com/originals/99/ea/10/99ea109fd4bc12a0b82e8f1ab68c1ae4.jpg")
const mascaraDeColageno = new Producto("Mascara colageno ",987,7,1,"https://eshop.jezmin.com.ar/4839-large_default/biocosmetica-exel-kit-para-mascara-de-colageno.jpg")
const mascaraDapop = new Producto("Mascara 2 en DAPOP ",1796,8,1,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIHsDXjZLGFvRbq5vlDVpYDbZ5PVZjMLGew&usqp=CAU")
const comboPaletas = new Producto("Combo 3 paletas de sombras de ojos",2699,9,1,"https://img.myloview.es/cuadros/paleta-de-maquillaje-400-316745.jpg")
const mascaraDescongestiva = new Producto("Mascara descongestiva ",1200,10,1,"https://http2.mlstatic.com/D_NQ_NP_695936-MLA31053357703_062019-O.webp")
const aguaMiselar = new Producto("Agua miselar ",900,11,1,"https://farmacityar.vteximg.com.br/arquivos/ids/179774-1000-1000/204369_agua-micelar-skin-active-x-400-ml_imagen-1.jpg?v=636694031151370000")
const delineadorLiquido = new Producto("delineador liquido",550,12,1,"https://farmaonline.vteximg.com.br/arquivos/ids/389765-0-0/8029344_0.jpg?v=637998174620570000")


let productos =[]
let carrito =[]
let comprasTotales = 0
const contenedorProductos = document.getElementById('carritoContenedor')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

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


document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito() 
    }
})

productos.forEach(producto=>{
    const contenedor = document.createElement('div')
    contenedor.className = `card col-lg-4 col-md-6 col-sm-6 mt-5`
    contenedor.innerHTML = `
    <div class="card-body">
    <img src=${producto.img} class="card-img-top" alt="...">
        <h5 class="card-title">${producto.nombre}
        ${producto.precio}</h5>
        <button id="${producto.id}" class="btn w-50  btn btn-outline-info">AGREGAR</button>
        </div>
    
    `  
   contenedorProductos.appendChild(contenedor)

   const button = document.getElementById(`${producto.id}`)

   button.addEventListener('click',()=>{
       agregarCarrito(producto.id)
      })


  
})

botonVaciar.onclick = ()=>{
    carrito.length = 0
    actualizarCarrito()
}
const botonPrueba = document.getElementById('botoonPurba')
const loaderS = document.getElementById('spinnerCarga')

botonPrueba.onclick = async()=>{
    productos =[] 
    const info = await fetch('https://productosmakeups-default-rtdb.firebaseio.com/productos.json')
    const infoJson = await info.json()
      console.log(infoJson)

   
    infoJson.forEach((produc=> {
        const  productos2 = new Producto(produc.nombre,produc.precio,produc.id,produc.cantidad,produc.img)
        productos.push(productos2) 
    }))
    productos.forEach(producto=>{
        const contenedor = document.createElement('div')
        contenedor.className = `card col-lg-4 col-md-6 col-sm-6 mt-5`
        contenedor.innerHTML = `
        <div class="card-body">
        <img src=${producto.img} class="card-img-top" alt="...">
            <h5 class="card-title">${producto.nombre}
            ${producto.precio}</h5>
            <button id="${producto.id}" class="btn w-50  btn btn-outline-info">AGREGAR</button>
            </div>
        `  
      localStorage.setItem('carrito',JSON.stringify(carrito))
        contenedorProductos.appendChild(contenedor)
     
      
        const button = document.getElementById(`${producto.id}`)
     
          
             button.addEventListener('click',()=>{
                 agregarCarrito(producto.id)
                 
                }) 
            
          })
    
          botonPrueba.remove()   
    }


/*OPERADORES AVANZADOS*/ 
const agregarCarrito = (prodId) =>{
   const existe = carrito.some(prod => prod.id === prodId)

  if (existe) {
    const prod = carrito.map(prod =>{
        if (prod.id === prodId) {
            prod.cantidad++
        }
    })
  }else{
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)

}
    
    actualizarCarrito()
    swal("Producto agregado!", "producto en carrito!", "success");
}


const eliminarCarrito = (prodId)=>{
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice,1)
    actualizarCarrito()
}


const actualizarCarrito = ()=>{
    contenedorCarrito.innerHTML =" "
    carrito.forEach((prod)=>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML =`
        <p>precio:$${prod.precio}</p><p>${prod.nombre}</p><p><span id="cantidad">${prod.cantidad}</span></p> <button onclick="eliminarCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito',JSON.stringify(carrito))
    })

     contadorCarrito.innerText = carrito.reduce((acc , prod) => acc + (prod.cantidad),0)
     precioTotal.innerText = carrito.reduce((acc , prod) => acc + (prod.precio * prod.cantidad),0)
}





   



