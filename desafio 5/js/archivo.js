let productos =[]
carrito =[]
const productTag = document.getElementById('article')

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

productos.forEach(producto=>{
    const contenedor = document.createElement('div')
    contenedor.className = `card col-lg-4 col-md-6 col-sm-6 mt-5`

    const contenedorHijo = document.createElement('div')
    contenedorHijo.className = `card-body`
    contenedor.appendChild(contenedorHijo)

    const titleName = document.createElement('h5')
    titleName.className = `card-title`
    titleName.innerText =`${producto.nombre} 
    $${producto.precio}`
    contenedor.appendChild(titleName)
    
    
    const button =  document.createElement('button')
    button.className = 'btn btn-primary'
    button.innerText = `AGREGAR`
    contenedor.appendChild(button)


    productTag.append(contenedor)
})



