const productos = [
    
    // =========================================
    // --- COLCHONES (10 Modelos) ---
    // =========================================
    {
        id: "c01",
        nombre: "Colchón Royal Visco",
        descripcion: "Gama Alta. Núcleo HR + 6cm viscoelástica con partículas de gel para no pasar calor.",
        precio: "499€",
        imagen: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=800&auto=format&fit=crop",
        categoria: "colchones"
    },
    {
        id: "c02",
        nombre: "Pikolin Normablock",
        descripcion: "Muelle de hilo continuo. El más resistente del mercado. Ideal para espaldas que sufren.",
        precio: "350€",
        imagen: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=800&auto=format&fit=crop",
        categoria: "colchones"
    },
    {
        id: "c03",
        nombre: "Látex 100% Natural",
        descripcion: "Máxima elasticidad y transpiración. Antibacteriano natural, perfecto para alérgicos.",
        precio: "620€",
        imagen: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
        categoria: "colchones"
    },
    {
        id: "c05",
        nombre: "Colchón Cuna 'Nube'",
        descripcion: "Seguridad para tu bebé. Cara de verano e invierno con tratamiento anti-asfixia.",
        precio: "115€",
        imagen: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
        categoria: "colchones"
    },
    {
        id: "c09",
        nombre: "Grand Hotel Luxe",
        descripcion: "Sensación nube. Altura extra de 32cm y acabados de lujo tipo suite de hotel.",
        precio: "799€",
        imagen: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
        categoria: "colchones"
    },

    // =========================================
    // --- ALMOHADAS (10 Modelos) ---
    // =========================================
    {
        id: "a01",
        nombre: "Almohada Cervical Visco",
        descripcion: "Forma ergonómica (onda) para corregir la postura del cuello y evitar ronquidos.",
        precio: "35€",
        // Ruta desde la carpeta raíz
        imagen: "imagenes/productos/almohada-1.png", 
        categoria: "almohadas"
    },
    {
        id: "a02",
        nombre: "Pack 2 Almohadas Fibra",
        descripcion: "Tacto pluma, lavables en lavadora. La opción económica y duradera.",
        precio: "25€",
        imagen: "imagenes/productos/almohada-2.png", 
        categoria: "almohadas"
    },
    {
        id: "a03",
        nombre: "Almohada Cool-Gel",
        descripcion: "Viscoelástica con una capa de gel frío. Olvídate de dar vueltas a la almohada en verano.",
        precio: "55€",
        imagen: "imagenes/productos/almohada-3.png", 
        categoria: "almohadas"
    },

    // =========================================
    // --- CANAPÉS Y BASES (10 Modelos) ---
    // =========================================
    {
        id: "b01",
        nombre: "Canapé Madera 3D",
        descripcion: "Gran capacidad al suelo (sin patas). Tapa transpirable a juego. Colores: Blanco, Cerezo, Wengué.",
        precio: "289€",
        imagen: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=800&auto=format&fit=crop",
        categoria: "canapes"
    },
    {
        id: "b02",
        nombre: "Base Tapizada Reforzada",
        descripcion: "5 barras de refuerzo transversales. Tejido 3D para que el colchón respire. Patas incluidas.",
        precio: "120€",
        imagen: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
        categoria: "canapes"
    },
    {
        id: "b03",
        nombre: "Cama Articulada Eléctrica",
        descripcion: "5 planos de articulación con mando inalámbrico. Motor silencioso alemán.",
        precio: "450€",
        imagen: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
        categoria: "canapes"
    },
    {
        id: "b06",
        nombre: "Cama Nido Canguro",
        descripcion: "Dos camas en el espacio de una. Estructura metálica reforzada. Ideal habitaciones juveniles.",
        precio: "210€",
        imagen: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
        categoria: "canapes"
    },
    // --- SOFÁS Y SILLONES ---
    {
        id: 20,
        nombre: "Chaise Longue Relax Confort",
        precio: "899€",
        categoria: "sofas",
        imagen: "imagenes/productos/sofa-1.png", // Asegúrate de tener esta imagen
        descripcion: "Sofá con asientos deslizantes y cabezales reclinables. Tapizado antimanchas de fácil limpieza."
    },
    {
        id: 21,
        nombre: "Sillón Relax Motorizado",
        precio: "350€",
        categoria: "sillones",
        imagen: "imagenes/productos/sofa-2.png",
        descripcion: "Sillón levantapersonas eléctrico con mando. Ideal para personas mayores o movilidad reducida."
    },

    // --- TEXTIL Y ROPA DE CAMA ---
    {
        id: 30,
        nombre: "Protector de Colchón Tencel",
        precio: "29€",
        categoria: "textil",
        imagen: "imagenes/productos/sabana-1.png",
        descripcion: "Impermeable y transpirable. Tejido natural que evita el calor y protege tu inversión."
    },
    {
        id: 31,
        nombre: "Relleno Nórdico 4 Estaciones",
        precio: "55€",
        categoria: "textil",
        imagen: "imagenes/productos/sabana-2.png",
        descripcion: "Dos edredones unidos por clips (125g + 250g) para usar todo el año. Tacto pluma."
    },

    // --- OFERTAS Y PACKS ---
    {
        id: 40,
        nombre: "Pack Ahorro: Colchón + Canapé",
        precio: "<span style='text-decoration:line-through; color:red; font-size:0.8em;'>750€</span> 499€",
        categoria: "ofertas",
        imagen: "imagenes/productos/oferta-1.png",
        descripcion: "¡Súper Oferta! Colchón viscoelástico de gama media + Canapé de gran capacidad abatible."
    },
    {
        id: 42,
        nombre: "Liquidación Colchón Muestrario",
        precio: "<span style='text-decoration:line-through; color:red; font-size:0.8em;'>600€</span> 299€",
        categoria: "ofertas",
        imagen: "imagenes/productos/oferta-2.png",
        descripcion: "Última unidad de exposición (135x190). Estado impecable, gran oportunidad."
    }
];