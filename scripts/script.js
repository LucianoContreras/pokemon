const productos=[
    //pokeballs
    {
        nombre: "PokeBall",
        categoria: "pokeballs",
        imagen:"/estilos/PokeBall.png",
        precio: 200   
    },
    {
        nombre: "SuperBall",
        categoria: "pokeballs",
        imagen:"/estilos/Super_Ball.png",
        precio: 600
    },
    {
        nombre: "UltraBall",
        categoria: "pokeballs",
        imagen:"/estilos/Ultra_Ball.png",
        precio: 800
    },

    {
        nombre: "VelozBall",
        categoria: "pokeballs",
        imagen:"/estilos/velozball.png",
        precio: 1000
    },
    {
        nombre:"TurnoBall",
        categoria:"pokeballs",
        imagen:"/estilos/Turno_Ball.png",
        precio: 1000
    },
    {
        nombre:"EnsueñoBall",
        categoria:"pokeballs",
        imagen:"/estilos/Ensueño_Ball.png",
        precio: 10000
    },
    {
        nombre:"LujoBall",
        categoria:"pokeballs",
        imagen:"/estilos/Lujo_Ball_.png",
        precio: 100000
    },
    {
        nombre:"MasterBall",
        categoria:"pokeballs",
        imagen:"/estilos/Master_Ball.png",
        precio: 600000
    },
    //Evolutivos
    {
        nombre:"Piedra Fuego",
        categoria:"evolutivos",
        imagen:"/estilos/piedra_fuego.png",
        precio: 3000
    },
    {
        nombre:"Piedra Agua",
        categoria:"evolutivos",
        imagen:"/estilos/Piedra_agua.png",
        precio: 3000
    },
    {
        nombre:"Piedra Trueno",
        categoria:"evolutivos",
        imagen:"/estilos/Piedra_trueno.png",
        precio: 3000
    },
    {
        nombre:"Piedra Noche",
        categoria:"evolutivos",
        imagen:"/estilos/Piedra_noche.png",
        precio: 3000
    },
    {
        nombre:"Escama Dragon",
        categoria:"evolutivos",
        imagen:"/estilos/Escama_dragon.png",
        precio: 3000
    },
    {
        nombre:"Rebestimiento Metalico",
        categoria:"evolutivos",
        imagen:"/estilos/Revestimiento_metal.png",
        precio: 3000
    },
    {
        nombre:"Magmatizador",
        categoria:"evolutivos",
        imagen:"/estilos/Magmatizador.png",
        precio: 3000
    },
    {
        nombre:"Electrizador",
        categoria:"evolutivos",
        imagen:"/estilos/Electrizador.png",
        precio: 3000
    },
    //ob.batalla
    {
        nombre:"Restos",
        categoria:"objetos batalla",
        imagen:"/estilos/restos.png",
        precio: 20000
    },
    {
        nombre:"Banda focus",
        categoria:"objetos batalla",
        imagen:"/estilos/banda,focus.png",
        precio: 50000
    },
    {
        nombre:"Cinta elegida",
        categoria:"objetos batalla",
        imagen:"/estilos/cinta_elección.png",
        precio: 50000
    },
    {
        nombre:"Botas Gruesas",
        categoria:"objetos batalla",
        imagen:"/estilos/Botas_gruesas.png",
        precio: 50000
    },
    {
        nombre:"Casco dentado",
        categoria:"objetos batalla",
        imagen:"/estilos/Casco_Dentado.png",
        precio: 50000
    },
    {
        nombre:"Vidasfera",
        categoria:"objetos batalla",
        imagen:"/estilos/Vidasfera.png",
        precio: 50000
    },
    {
        nombre:"Chaleco Asalto",
        categoria:"objetos batalla",
        imagen:"/estilos/Chaleco_asalto.png",
        precio: 50000
    },
    {
        nombre:"Seguro Debilidad",
        categoria:"objetos batalla",
        imagen:"/estilos/Seguro_debilidad.png",
        precio: 50000
    }    




    

]

const contenedor=document.querySelector(".container")
contenedor.innerHTML=productos.map(producto=>`
<div class="caja-item hoverable">
    <p>${producto.nombre}</p>
    <img src="${producto.imagen}" class="item">
    <div class="contenedor-precio">
        <img src="/estilos/Pokedolares.png" class="pokedolares">
        <p>${producto.precio}</p>
    </div>
</div>
`).join("")