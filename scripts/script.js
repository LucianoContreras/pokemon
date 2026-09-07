const productos=[
    //pokeballs
    {
        nombre: "PokeBall",
        categoria: "pokeballs",
        imagen:"estilos/imagenes/PokeBall.webp",
        precio: 200   
    },
    {
        nombre: "SuperBall",
        categoria: "pokeballs",
        imagen:"estilos/imagenes/Super_Ball.webp",
        precio: 600
    },
    {
        nombre: "UltraBall",
        categoria: "pokeballs",
        imagen:"estilos/imagenes/Ultra_Ball.webp",
        precio: 800
    },

    {
        nombre: "VelozBall",
        categoria: "pokeballs",
        imagen:"estilos/imagenes/velozball.webp",
        precio: 1000
    },
    {
        nombre:"TurnoBall",
        categoria:"pokeballs",
        imagen:"estilos/imagenes/Turno_Ball.webp",
        precio: 1000
    },
    {
        nombre:"EnsueñoBall",
        categoria:"pokeballs",
        imagen:"estilos/imagenes/Ensueño_Ball.webp",
        precio: 10000
    },
    {
        nombre:"LujoBall",
        categoria:"pokeballs",
        imagen:"estilos/imagenes/Lujo_Ball_.webp",
        precio: 100000
    },
    {
        nombre:"MasterBall",
        categoria:"pokeballs",
        imagen:"estilos/imagenes/Master_Ball.webp",
        precio: 600000
    },
    //Evolutivos
    {
        nombre:"Piedra Fuego",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/piedra_fuego.webp",
        precio: 3000
    },
    {
        nombre:"Piedra Agua",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/Piedra_agua.webp",
        precio: 3000
    },
    {
        nombre:"Piedra Trueno",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/Piedra_trueno.webp",
        precio: 3000
    },
    {
        nombre:"Piedra Noche",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/Piedra_noche.webp",
        precio: 3000
    },
    {
        nombre:"Escama Dragon",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/Escama_dragon.webp",
        precio: 3000
    },
    {
        nombre:"Rebestimiento Metalico",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/Revestimiento_metal.webp",
        precio: 3000
    },
    {
        nombre:"Magmatizador",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/Magmatizador.webp",
        precio: 3000
    },
    {
        nombre:"Electrizador",
        categoria:"evolutivos",
        imagen:"estilos/imagenes/Electrizador.webp",
        precio: 3000
    },
    //ob.batalla
    {
        nombre:"Restos",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/restos.webp",
        precio: 20000
    },
    {
        nombre:"Banda focus",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/banda,focus.webp",
        precio: 50000
    },
    {
        nombre:"Cinta elegida",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/cinta_elección.webp",
        precio: 50000
    },
    {
        nombre:"Botas Gruesas",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/Botas_gruesas.webp",
        precio: 50000
    },
    {
        nombre:"Casco dentado",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/Casco_Dentado.webp",
        precio: 50000
    },
    {
        nombre:"Vidasfera",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/Vidasfera.webp",
        precio: 50000
    },
    {
        nombre:"Chaleco Asalto",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/Chaleco_asalto.webp",
        precio: 50000
    },
    {
        nombre:"Seguro Debilidad",
        categoria:"objetos batalla",
        imagen:"estilos/imagenes/Seguro_debilidad.webp",
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
                <img src="estilos/imagenes/Pokedolares.webp" class="pokedolares">
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
  
document.addEventListener('DOMContentLoaded', () => {
  const modales = document.querySelectorAll('.modal');
  const instancias = M.Modal.init(modales);

  const inputCantidad = document.getElementById('modal-cantidad-input');
  const btnRestar = document.getElementById('btn-restar-modal');
  const btnSumar = document.getElementById('btn-sumar-modal');
  const btnIrCarro = document.querySelector('.btn-ir-carro');

  btnRestar.addEventListener('click', () => {
    let valor = parseInt(inputCantidad.value);
    if (valor > 1) {
      inputCantidad.value = valor - 1;
    }
  });

  btnSumar.addEventListener('click', () => {
    let valor = parseInt(inputCantidad.value);
    inputCantidad.value = valor + 1;
  });

  btnIrCarro.addEventListener('click', () => {
  
    window.location.href = 'carrito.html';
  });
});

document.addEventListener('click', (e) => {
  const botonAgregar = e.target.closest('.btn-agregar-carrito');

  if (botonAgregar) {
    e.preventDefault();

    const nombreProducto = botonAgregar.getAttribute('data-nombre');

   
    const productoEncontrado = productos.find(prod => prod.nombre == nombreProducto);

    if (productoEncontrado) {
      document.getElementById('modal-cantidad-input').value = 1;
      document.getElementById('modal-img').src = productoEncontrado.imagen;
      document.getElementById('modal-nombre').innerText = productoEncontrado.nombre;
      document.getElementById('modal-precio').innerText = productoEncontrado.precio;

    
      const modalElemento = document.getElementById('modal-carrito');
      const instanciaModal = M.Modal.getInstance(modalElemento);
      instanciaModal.open();
    }
  }
});

/*Carrito*/



  