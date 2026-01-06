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