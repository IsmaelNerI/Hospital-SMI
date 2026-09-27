# Hospital SMI — fotografía web

## Fuentes y presentación

- Fotografías institucionales: entregadas por el usuario en `Dising/SMI`, identificadas por él como fotografías del hospital. Se conserva su contenido; se exportan a WebP para servirlas localmente.
- Retratos: enlaces del documento de investigación entregado por el usuario. Se recuperaron variantes originales de mayor resolución para Ignacio Méndez, Juan Ricardo Méndez, Baltazar Bertaud, Atena Gutiérrez, Alfonso García y Sergio Ruiz. Identificación según el documento del usuario.
- Registro de URLs, dimensiones y procesamiento: `photo-sources.json`.
- Atena, Ignacio y Sergio: fotografías retiradas de publicación en la tercera revisión. Se muestran monogramas AG, IM y SR. Los originales y las variantes anteriores se conservan únicamente en `assets/reference/doctors/`, fuera de `public`. No se recortan anuncios ni se modifican expresiones para simular retratos institucionales.
- José Efraín: la fuente disponible tiene 220 × 220 px. Se muestra en tamaño moderado; no se inventan detalles para simular resolución.
- José Raúl Montes: conserva monograma porque no se entregó fotografía.
- No se agregan afirmaciones sobre equipos, servicios o capacidades a partir de fotografías.

## Ediciones conservadoras con la herramienta integrada image_gen

Registro histórico de ediciones descartadas para publicación. Archivos originales conservados junto a las variantes `-edited.webp` en `assets/reference/doctors/`. El objetivo es mejorar iluminación y balance de color, no sustituir personas o lugares. Las ediciones generativas son interpretaciones retocadas; para una reproducción estrictamente documental se conservan los originales.

### Sergio Ruiz

Use case: identity-preserve. Edit this exact photograph for a hospital physician directory. Conservative photographic retouch only: neutralize the strong yellow/green cast, gently lift the shadows on the face and improve exposure, subtle noise reduction and natural detail. Preserve EXACT same person, face geometry, eyes, hair, facial hair, age, skin texture, expression, pose, black shirt and original background and table objects. No beauty treatment, no facial reconstruction, no added medical clothing or equipment, no studio replacement. Retain square framing and realistic photographic texture. This is photo correction, not a new portrait.

### Ignacio Méndez

Use case identity-preserve. Conservative professional photographic color correction of this exact supplied physician photo. Preserve precisely the same real person's facial geometry, features, eyes behind the glasses, nose, mouth and tongue position, expression, age, hair, skin texture, black eyeglasses, clothing, pose, framing and original room. Change only white balance to a neutral natural tone, gently reduce harsh highlights on forehead, improve tonal balance and subtle photographic clarity without smooth plastic skin. Do not reconstruct the face, beautify, add details, replace background, add medical objects, change expression or create a new portrait. Natural realistic edit, square image.
