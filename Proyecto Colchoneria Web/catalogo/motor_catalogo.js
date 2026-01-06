/* ARCHIVO: motor_catalogo.js 
   Este script se encarga de pintar los productos, gestionar los enlaces a detalles y hacer funcionar el buscador.
*/

// Seleccionamos los elementos del DOM
const contenedor = document.getElementById('contenedor-productos');
const inputBuscador = document.getElementById('input-buscador');

// --- 1. FILTRADO INICIAL ---
if (typeof categoriasAVisualizar === 'undefined') {
    console.error("ERROR: Debes definir 'const categoriasAVisualizar = [...]' en el HTML antes de llamar a este script.");
}

const productosDeLaPagina = productos.filter(item => 
    categoriasAVisualizar.includes(item.categoria)
);

// --- 2. FUNCIÓN DE PINTADO ---
function mostrarProductos(lista) {
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <h3>😔 No hay coincidencias</h3>
                <p>Intenta con otra palabra clave.</p>
            </div>
        `;
        return;
    }

    // --- TRUCO DE RUTAS ---
    // Detectamos si estamos dentro de la carpeta 'paginas_catalogo' o fuera
    // para poner la ruta correcta al archivo de detalle.
    const rutaBase = window.location.pathname.includes('paginas_catalogo') 
        ? 'detalle_producto.html' 
        : 'paginas_catalogo/detalle_producto.html';

    lista.forEach((producto, index) => {
        const retardo = index * 0.05; 
        
        // RECORTAR DESCRIPCIÓN: Si es muy larga, la cortamos y ponemos "..."
        // Esto evita que una tarjeta sea gigante y descuadre el diseño
        const descripcionCorta = producto.descripcion.length > 70 
            ? producto.descripcion.substring(0, 70) + '...' 
            : producto.descripcion;

        const htmlTarjeta = `
            <article class="product-item" style="animation-delay: ${retardo}s">
                <div class="product-img-box">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="product-details">
                    <h3>${producto.nombre}</h3>
                    <p>${descripcionCorta}</p>
                    <span class="price-tag">${producto.precio}</span>
                    
                    <a href="${rutaBase}?id=${producto.id}" class="btn-product" style="background: white; color: var(--brand-dark-blue); border: 1px solid var(--brand-dark-blue); margin-bottom: 5px;">
                        Ver detalles
                    </a>

                    <a href="../../contacto.html?interes=${encodeURIComponent(producto.nombre)}" class="btn-product">
                        Me interesa
                    </a>
                </div>
            </article>
        `;
        contenedor.innerHTML += htmlTarjeta;
    });
}

// --- 3. INICIALIZACIÓN ---
mostrarProductos(productosDeLaPagina);

// --- 4. BUSCADOR EN TIEMPO REAL ---
if (inputBuscador) {
    inputBuscador.addEventListener('input', (evento) => {
        const texto = evento.target.value.toLowerCase();

        const filtrados = productosDeLaPagina.filter(producto => {
            const nombre = producto.nombre.toLowerCase();
            // Buscamos en nombre y también en descripción original (no la cortada)
            const desc = producto.descripcion.toLowerCase();
            return nombre.includes(texto) || desc.includes(texto);
        });

        mostrarProductos(filtrados);
    });
}