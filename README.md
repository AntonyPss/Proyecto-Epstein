# Escape de la Isla Epstein

Juego web estático de piedra, papel o tijeras con narrativa de terror. El jugador debe ganar tres rondas consecutivas y dispone de dos derrotas antes del final.

## Estructura

- `index.html`: estructura semántica, metadatos, controles y recursos.
- `styles.css`: tema visual, diseño responsive, estados de foco y animaciones.
- `script.js`: estado de la partida, narrativa, audio y eventos de interacción.
- `assets/images/`: imágenes de escenas y finales.
- `assets/sounds/`: música ambiental y efectos.

## Ejecución local

Abre `index.html` en un navegador moderno. Para probar audio y políticas de seguridad de forma equivalente a producción, sirve la carpeta mediante HTTPS o un servidor local:

```text
python -m http.server 8080
```

Después visita `http://localhost:8080/`. En un despliegue público, configura HTTPS y las cabeceras HTTP en el servidor o plataforma de hosting; una página estática abierta directamente con `file://` no puede configurar esas cabeceras desde el código del proyecto.

## Accesibilidad y responsive

- Todas las imágenes informativas tienen texto alternativo y dimensiones explícitas.
- Los elementos interactivos son botones nativos y se pueden recorrer con teclado.
- Los resultados y la narración usan regiones vivas para lectores de pantalla.
- Se respeta `prefers-reduced-motion`.
- El layout usa unidades fluidas y puntos de ruptura para pantallas pequeñas.

## Rendimiento y seguridad

- Los scripts se cargan con `defer` y no se usan entradas externas ni HTML dinámico sin sanitizar.
- Los textos se actualizan con `textContent`, evitando inyección HTML.
- Los audios se cargan bajo demanda mediante interacción del usuario.
- En producción se recomienda minificar `styles.css` y `script.js`, comprimir imágenes y audio, habilitar Brotli/Gzip, caché con hash de archivos y estas cabeceras: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options` y `Referrer-Policy`.

## Verificación

Comprobar en Chrome, Firefox, Edge y Safari en escritorio y móvil:

1. Inicio, historia, tres elecciones, empate, victoria y derrota.
2. Navegación completa con teclado y foco visible.
3. Viewports de 320 px, 768 px y escritorio.
4. Preferencia de movimiento reducido.
5. Auditoría Lighthouse en modo móvil y escritorio cuando se ejecute mediante HTTP/HTTPS.
