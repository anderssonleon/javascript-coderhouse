class Producto{
    constructor(nombre,precio,id,cantidad){
        this.nombre = nombre
        this.precio = precio
        this.id =id
        this.cantidad = cantidad
    }
}
const ahesivo = new Producto("Adhesivo para rostro",849,1,1)
const paleta = new Producto("Paleta 18 sombras rubi rose",1490,2,1)
const delineador = new Producto("Delineador de ojos de fibra",3196,3,1)
const labialExfoliante = new Producto("Labial exfoliante",1598,4,1)
const paletaIluminadora = new Producto("Paleta iluminadora",999,5,1)
const setAriel = new Producto("Set ariel ",2399,6,1)
const mascaraDeColageno = new Producto("Mascara colageno ",987,7,1)
const mascaraDapop = new Producto("Mascara 2 en DAPOP ",1796,8,1)
const comboPaletas = new Producto("Combo 3 paletas de sombras de ojos",2699,9,1)
const mascaraDescongestiva = new Producto("Mascara descongestiva ",1200,10,1)
const aguaMiselar = new Producto("Agua miselar ",900,11,1)
const delineadorLiquido = new Producto("delineador liquido",550,12,1)



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


botonVaciar.onclick = ()=>{
    carrito.length = 0
    actualizarCarrito()
}
const botonPrueba = document.getElementById('botoonPurba')
function spinnerLoader() {
    const loader = document.getElementById('spinnerCarga')

    setTimeout(()=>{
        loader.style.display = "inline-block"
    },2000
    
    )

}
botonPrueba.addEventListener('click',spinnerLoader)
botonPrueba.onclick = async()=>{
   
            productos =[]   
            const info = await fetch('https://productosmakeups-default-rtdb.firebaseio.com/productos.json')
           const infoJson = await info.json()
           const data  = infoJson.forEach((produc=> {
                  const  productos2 = new Producto(produc.nombre,produc.precio,produc.id,produc.cantidad)
                  productos.push(productos2) 
                 }))
                 productos.forEach(producto=>{
                    const contenedor = document.createElement('div')
                    contenedor.className = `card col-lg-4 col-md-6 col-sm-6 mt-5`
                    contenedor.innerHTML = `
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}
                    ${producto.precio}</h5>
                    <button id="${producto.id}" class="btn w-50  btn btn-outline-info">AGREGAR</button>
                    </div>
                    `  
                    console.log(productos)
                   contenedorProductos.appendChild(contenedor)
                
                 
                   const button = document.getElementById(`${producto.id}`)
                
                
                   button.addEventListener('click',()=>{
                       agregarCarrito(producto.id)
                       
                      }) 
                  
                })
                botonPrueba.remove()
                 
    }

productos.forEach(producto=>{
    const contenedor = document.createElement('div')
    contenedor.className = `card col-lg-4 col-md-6 col-sm-6 mt-5`
    contenedor.innerHTML = `
    <div class="card-body">
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
    contenedorCarrito.innerHTML =""
    carrito.forEach((prod)=>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML =`
        <p>precio:$${prod.precio}</p><p>${prod.nombre}</p><p><span id="cantidad">${prod.cantidad}</span></p> <button onclick="eliminarCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito',JSON.stringify(carrito))
    })

     contadorCarrito.innerText = carrito.length
     precioTotal.innerText = carrito.reduce((acc , prod) => acc + (prod.precio * prod.cantidad),0)
}





   



