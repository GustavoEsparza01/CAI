# CAI · Centro de Asesorías Integrales

Landing page del instituto de inglés CAI: trayectoria, servicios, testimonios de alumnos, programas, preguntas frecuentes y adelanto de la futura plataforma de cursos.

## Estructura

```
index.html     Página
styles.css     Estilos (paleta azul/blanco, responsive: 1100 / 960 / 640 / 380 px)
main.js        Menú móvil, acordeón FAQ, contadores, animaciones y formularios
assets/        Logo en vector (SVG) y exportaciones PNG / íconos
```

Sitio estático sin dependencias: basta con abrir `index.html` o servir la carpeta.

```bash
npx http-server -c-1
```

## Pendientes

- Reemplazar datos de ejemplo (cifras, años, testimonios, teléfono, dirección, precios/promociones).
- Sustituir fotos de Unsplash por fotos reales de CAI.
- Conectar los formularios (clase muestra y lista de espera) a un servicio de envío.
