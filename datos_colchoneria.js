const empresa = {
    nombre: "Colchonería Jaén",
    email: "info@colchoneriajaen.com",
    telefono: "953 01 68 51",
    direccion: "Polígono Los Olivares, C. Espeluy 32",
    ciudad: "23009 Jaén, España",
    horarioLunesViernes: "9:30 - 13:30 | 17:30 - 20:00",
    horarioSabado: "10:00 - 13:30",
    
    // VARIABLES NUEVAS
    numerowhastapp: "34627515397", 
    facebookUrl: "https://www.facebook.com/colchoneria.jaen/about/?_rdr", // Pon aquí tu url real
    instagramUrl: "https://www.instagram.com/colchoneria_jaen32/", // Pon aquí tu url real
    tiktokUrl: "https://www.tiktok.com/@colchonera.jan"
};

document.addEventListener("DOMContentLoaded", function() {
    
    // Buscamos todos los elementos con el atributo 'data-dato'
    const elementos = document.querySelectorAll('[data-dato]');

    elementos.forEach(elemento => {
        const tipoDato = elemento.getAttribute('data-dato');
        
        // Si el dato existe en nuestra variable 'empresa'
        if (empresa[tipoDato]) {
            
            // CASO A: Es un enlace (<a>)
            if (elemento.tagName === 'A') {
                if (tipoDato === 'email') {
                    elemento.href = `mailto:${empresa[tipoDato]}`;
                    elemento.textContent = empresa[tipoDato];
                } else if (tipoDato === 'telefono') {
                    // Quitamos espacios para que el enlace tel: funcione bien
                    const telLimpio = empresa[tipoDato].replace(/\s/g, '');
                    elemento.href = `tel:${telLimpio}`; 
                    elemento.textContent = empresa[tipoDato];
                } else {
                    elemento.textContent = empresa[tipoDato];
                }
            } 
            // CASO B: Es texto normal (p, h2, span, etc.)
            else {
                elemento.textContent = empresa[tipoDato];
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. WhatsApp
    const btnWasap = document.getElementById('link-whatsapp');
    if (btnWasap) btnWasap.href = "https://wa.me/" + empresa.numerowhastapp;

    // 2. Facebook
    const btnFb = document.getElementById('link-facebook');
    if (btnFb) btnFb.href = empresa.facebookUrl;

    // 3. Instagram
    const btnInsta = document.getElementById('link-instagram');
    if (btnInsta) btnInsta.href = empresa.instagramUrl;

    // 4. TikTok (NUEVO)
    const btnTiktok = document.getElementById('link-tiktok');
    if (btnTiktok) {
        btnTiktok.href = empresa.tiktokUrl;
    }

});

/* =========================================
   DATOS DE LA TIENDA (CONFIGURACIÓN GENERAL)
   ========================================= */
const datosTienda = {
    nombre: "Colchonería Jaén",
    direccion: "Av. de Madrid, 22",
    ciudad: "23003 Jaén",
    telefono: "953 12 34 56",
    email: "info@colchonerisjaen.es",
    horarioLunesViernes: "10:00 - 14:00 | 17:00 - 20:30",
    horarioSabado: "10:00 - 13:30"
};

/* =========================================
   RESEÑAS REALES (COPIADAS MANUALMENTE)
   ========================================= */
const resenasGoogle = [
    {
        nombre: "Nono Vico",
        fecha: "Hace 2 años",
        texto: "Estamos muy contentos por la gran profesionalidad de Olga, buen servicio, muy buen trato y sobre todo la gran rapidez y gestión por parte de los trabajadores a la hora del reparto y montaje de los productos adquiridos, muchas gracias por todo!!!!!👏🏻👏🏻👏🏻👏🏻",
        estrellas: 5,
        inicial: "Nono"
    },
    {
        nombre: "José Ángel Torre-Marín Jiménez",
        fecha: "Hace 2 años",
        texto: "Calidad a buen precio. Olga es muy simpática, amable y servicial. Además ofrece excelente atención al cliente, tanto técnica como comercial. Recomendada siempre.",
        estrellas: 5,
        inicial: "J"
    },
    {
        nombre: "Poli.",
        fecha: "Hace 4 años",
        texto: "Profesionales con precios ajustados a la gran calidad de los colchones. Entrega rápida. Muy buena relación/calidad/precio.",
        estrellas: 5,
        inicial: "P"
    },
    {
        nombre: "Sergio Muñoz",
        fecha: "Hace 4 meses",
        texto: "Colchones y utensilios de descanso muy buenos y confortables. Muy buena atención al cliente y los precios espectaculares,100% recomendable.",
        estrellas: 5,
        inicial: "S"
    },
    {
        nombre: "Blas López",
        fecha: "Hace 2 años",
        texto: "Buen asesoramiento en la elección y buen producto. Muy recomendable.",
        estrellas: 5,
        inicial: "B"
    },
    {
        nombre: "Marí Sánchez Pérez",
        fecha: "Hace 2 meses",
        texto: "Una tienda estupenda,inmejorable en calidad y precio...trato personal excelente ,repetiré experiencia",
        estrellas: 5,
        inicial: "M"
    }
];

/* =========================================
   FUNCIONES DE CARGA (LÓGICA)
   ========================================= */

// 1. Cargar datos de contacto (Footer y Nav)
function cargarDatosContacto() {
    const elementos = document.querySelectorAll('[data-dato]');
    
    elementos.forEach(elemento => {
        const tipoDato = elemento.getAttribute('data-dato');
        if (datosTienda[tipoDato]) {
            // Si es un enlace (href), lo actualizamos acorde
            if (elemento.tagName === 'A') {
                if (tipoDato === 'telefono') {
                    elemento.href = `tel:${datosTienda.telefono.replace(/\s/g, '')}`;
                    elemento.textContent = datosTienda.telefono;
                } else if (tipoDato === 'email') {
                    elemento.href = `mailto:${datosTienda.email}`;
                    elemento.textContent = datosTienda.email;
                } else {
                    elemento.textContent = datosTienda[tipoDato];
                }
            } else {
                // Si es texto normal
                elemento.textContent = datosTienda[tipoDato];
            }
        }
    });
}

// 2. Cargar Reseñas (Sección dinámica)
function cargarResenas() {
    const contenedor = document.getElementById('reviews-container');
    
    // Si no existe el contenedor en el HTML actual, salimos para no dar error
    if(!contenedor) return;

    // Limpiamos contenido previo
    contenedor.innerHTML = '';

    // Generamos el HTML de cada reseña
    resenasGoogle.forEach(review => {
        // Creamos las estrellas HTML según el número
        let estrellasHTML = '';
        for(let i=0; i<5; i++) {
            if(i < review.estrellas) {
                estrellasHTML += '<i class="fa-solid fa-star"></i>'; // Estrella llena
            } else {
                estrellasHTML += '<i class="fa-regular fa-star"></i>'; // Estrella vacía
            }
        }

        const tarjetaHTML = `
            <div class="review-card">
                <div class="review-author">
                    <div class="author-avatar">${review.inicial}</div>
                    <div class="author-info">
                        <h4>${review.nombre}</h4>
                        <span class="review-date">${review.fecha}</span>
                    </div>
                </div>
                <div class="review-stars">
                    ${estrellasHTML}
                </div>
                <p class="review-text">"${review.texto}"</p>
            </div>
        `;
        contenedor.innerHTML += tarjetaHTML;
    });
}

// 3. Inicializar todo cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    cargarDatosContacto();
    cargarResenas();
});