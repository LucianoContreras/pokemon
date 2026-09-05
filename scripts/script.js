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

const contenedor = document.querySelector(".container");

function mostrarProductos(lista) {
  contenedor.innerHTML = `
    <div class="row">
      ${lista.map(producto => `
        <div class="col s12 m4">
          <div class="card hoverable">
            <div class="card-image">
              <img src="${producto.imagen}" class="item">
              <span class="card-title">${producto.nombre}</span>
            </div>
            <div class="card-content">
              <div class="contenedor-precio">
              <span class="nombre-producto">${producto.nombre}</span>
                <img src="/estilos/Pokedolares.png" class="pokedolares">
                <span>${producto.precio}</span>
              </div>
            </div>
            <div class="card-action">
              <a href="#!" class="btn-agregar-carrito waves-effect waves-light" data-nombre="${producto.nombre}">
                <i class="material-icons left">shopping_cart</i>Agregar
              </a>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

mostrarProductos(productos);
mostrarProductos(productos);

document.querySelectorAll('#dropdown1 a').forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    const categoriaSeleccionada = e.target.getAttribute('data-categoria');

    if (categoriaSeleccionada === 'todos') {
      mostrarProductos(productos);
    } else {
      const productosFiltrados = productos.filter(
        producto => producto.categoria === categoriaSeleccionada
      );
      mostrarProductos(productosFiltrados);
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      duration: 200,
      dist: -100,
      shift: 0,
      padding: 20,
      numVisible: 5
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

  const inputBusqueda = document.getElementById('Producto.busqueda');
  inputBusqueda.addEventListener('input',(e) => {
    const textoBusqueda=e.target.value.toLowerCase().trim();
    
    const productosFiltrados =productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBusqueda)
    );
    mostrarProductos(productosFiltrados);
  });