# Revisión premium v3

Fecha: 26 septiembre 2026 (México).

## Comprobaciones locales

- TypeScript, ESLint y compilación Next.js: correctos. 35 páginas generadas.
- 29 rutas del sitemap: HTTP 200 y un solo H1 por página.
- 37 destinos de enlaces internos (incluidas fotos completas): accesibles.
- Los dos médicos pendientes no figuran en sitemap ni tienen página pública.
- JSON-LD Hospital presente; perfiles con Physician y sólo cédulas de tipo identificado.
- No hay referencias a fotografías retiradas en las páginas; las fuentes de credenciales no se serializan en el directorio cliente.
- Búsqueda «mendez»: 2 resultados; Coloproctología: 1 resultado, Atena.
- 14 pantallas a 390, 430 y 1440 px: 42 capturas; sin desbordamiento horizontal, un H1 en cada una.
- Inspección visual adicional: perfil completo de Atena en móvil, Baltazar en escritorio, portada completa y retratos después de cargar, galería editorial y menús.
- Segunda pasada: se cambió la recepción principal a 16:9 y las imágenes de médicos a `fill` para eliminar la advertencia de proporciones; sizes móvil ajustado a 160 px.

Las copias duplicadas de tipos generados encontradas en `.next/types` se movieron a un archivo temporal local antes de repetir TypeScript. No se modificó la configuración para ocultar errores.

## Límites de contenido

No se afirma validación SEP/RNP. Las cédulas de Atena, Alfonso y Juan Francisco y la segunda de Ignacio permanecen genéricas. Cuatro perfiles usan monograma. Se mantienen Analytics y Speed Insights; la recepción de tráfico real depende de visitas y del panel de Vercel.
