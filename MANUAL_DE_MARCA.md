# Manual de marca · Angela Soplín — v1.0

**Fecha:** octubre de 2026 · **Uso:** portafolio profesional, casos de estudio, LinkedIn y materiales editoriales.

## Concepto de marca

**Idea rectora:** “Conecto calidad, procesos y tecnología para crear soluciones digitales.”

**Secuencia narrativa:** observar → conectar → crear.

**Personalidad:** analítica, humana, clara, cercana y profesional. La ilustración pixel art es una **firma secundaria**, no el foco de proyectos técnicos ni del encabezado de CV.

## Paleta oficial — tokens CSS

| Rol | Color | Hex | Token |
|---|---|---|---|
| Fondo base | Crema | `#f8f6f1` | `--cream` |
| Fondo secundario | Crema profundo | `#eee9df` | `--cream-deep` |
| Superficie visual | Lila | `#ddd5f4` | `--lilac` |
| Superficie suave | Lila muy claro | `#eeeafb` | `--lilac-light` |
| Acento | Púrpura | `#8f70d8` | `--purple` |
| Acento fuerte | Púrpura profundo | `#6749ae` | `--purple-dark` |
| Texto | Carbón | `#29262a` | `--charcoal` |
| Texto auxiliar | Gris violeta | `#675f6c` | `--muted` |
| Superficies claras | Blanco cálido | `#fffdf9` | `--white` |

**Proporción orientativa:** 60 % crema/blanco, 25 % superficies lilas suaves, 10 % carbón tipográfico y 5 % acentos púrpuras. Evitar grandes fondos negros o colores que compitan con el sistema.

## Tipografía

- **Fraunces:** títulos principales, titulares editoriales y citas cortas. Usar contraste de tamaño y peso sin abusar de la cursiva.
- **Inter:** textos, navegación, tarjetas, listas y descripción de proyectos.
- **DM Mono:** etiquetas técnicas, números de etapas, eyebrow y metadatos. No usarlo para párrafos extensos ni titulares grandes.

**Escala orientativa:** H1 44–72 px, H2 32–48 px, H3 21–30 px, cuerpo 16–18 px, etiquetas 10–12 px. En móvil ajustar con `clamp()`, evitar cuerpos por debajo de 14 px.

## Composición y tarjetas

- Priorizar un título de impacto, una explicación concisa y evidencia relevante.
- Margen lateral consistente con `.shell`. Separación vertical generosa pero deliberada.
- Tarjetas técnicas con jerarquía: número/icono discreto → nombre → función.
- Radios de 14–24 px y sombras livianas; evitar paneles sobrecargados.
- El vacío debe separar ideas y guiar la lectura, no generar grandes zonas sin propósito.

## Ilustración pixelada: uso correcto

- Mascota de marca como firma secundaria en Inicio o Sobre mí, nunca como evidencia de una prueba técnica.
- **Versión final deseada:** sin corazones, sin burbuja lateral de chat ni puntos superpuestos; nariz kawaii mínima y cejas discretas.
- Mantener la frase «Primero quiero entender» y la firma «observar → conectar → crear».
- **Importante:** el GIF/WebM y póster originales pueden conservar elementos antiguos; deben sustituirse por el asset gráfico final aprobado, no taparse con una segunda animación flotante.
- No deformar, no recortar el rostro, no añadir efectos que afecten la pixelación.
- Registrar el archivo fuente aprobado en `assets/` cuando se suba. No afirmar que ese reemplazo se realizó mientras falte.

## Foto profesional

- Presentarla en marco **circular**, usando `aspect-ratio:1`, `border-radius:50%` y `object-fit:cover`.
- Fondo claro, encuadre centrado y sin alterar facciones. No usar la foto como decoración en tarjetas técnicas.

## Casos de estudio

- **EdTech / QA:** estilo editorial en lila, título corto y tres etapas: Agendamiento → Validación → Hallazgos. Diferenciar escenarios FAIL de defectos únicos y E2E manual de automatización.
- **Quipta / OCR:** tablas claras, validación humana y señalamiento de datos sintéticos. Distinguir el motor local probado de la app web planeada.
- **Estar Bien / Centria:** datos y KPIs con contexto, atribuciones correctas y explicaciones de la intervención realizada.
- **AWS:** comunicar formación re/Start y planes de alojamiento en la nube sin afirmar despliegues no completados.

## Interacciones y accesibilidad

- Contraste legible sobre fondo lila y crema; foco visible para teclado.
- Estados hover discretos y consistentes.
- Animaciones opcionales y respeto a `prefers-reduced-motion`.
- Revisar portada y tarjetas en escritorio (≥1024 px), tableta (~768 px) y móvil (360–430 px).

## Alcance de esta versión

La guía documenta el sistema visual aplicado mediante CSS y texto. Las ilustraciones y fotografías son recursos vinculados, no diseños vectoriales originales entregados dentro de este documento. La nueva imagen pixelada final queda pendiente de sustitución binaria en el repositorio.
