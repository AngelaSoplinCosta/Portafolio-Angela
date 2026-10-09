# Manual de marca · Angela Soplín — v1.1 · borrador colaborativo

**Fecha:** octubre de 2026 · **Estado:** borrador para validación, sobre la base visual v1.0. **Uso:** portafolio, casos de estudio, LinkedIn y materiales editoriales.

> La marca debe seguir sintiéndose como Angela incluso si quitamos la ilustración y las animaciones. La tecnología amplifica la voz propia; no debe sustituirla.

## Concepto de marca

**Idea rectora:** “Conecto calidad, procesos y tecnología para crear soluciones digitales.”

**Secuencia narrativa:** observar → conectar → crear.

**Personalidad:** analítica, humana, clara, cercana y profesional. La ilustración pixel art es una **firma secundaria**, no el foco de proyectos técnicos ni del encabezado de CV.

**Principio creativo propuesto:** «Primero entiendo. Después conecto y creo». Complementa, no sustituye, el titular profesional existente.

**Idea diferencial:** una profesional que parte de lo que viven las personas, analiza patrones y lleva ese aprendizaje a mejoras y soluciones digitales comprobables. No inventar credenciales ni inflar alcances de proyectos en formación.

## Identidad estratégica · propuesta por validar

### Esencia

**Entender antes de construir.** La curiosidad y la escucha llevan al análisis; el análisis orienta decisiones; las decisiones se prueban y mejoran.

**Promesa de marca (aspiracional, no garantía comercial):** abordar problemas con escucha, estructura, claridad y criterio para contribuir a soluciones que puedan evaluarse.

**Territorio profesional real:** calidad de servicios digitales, CX y VoC, análisis de incidencias, QA funcional y proyectos de automatización e IA aplicada. Cloud y QA Automation se comunican como formación y práctica en desarrollo, según la evidencia disponible.

### Cinco rasgos de personalidad

| Rasgo | Cómo se expresa | Qué evitar |
|---|---|---|
| Curiosa | Hace preguntas pertinentes antes de proponer respuestas. | Efectos visuales que no explican nada. |
| Analítica | Muestra métodos, criterios, resultados y límites. | Cifras sin contexto o métricas exageradas. |
| Empática | Considera a la persona y al equipo detrás del proceso. | Mensajes grandilocuentes o impersonales. |
| Creativa | Une disciplinas y diseña maneras claras de explicar. | Plantillas y metáforas repetidas sin criterio. |
| Rigurosa | Distingue lo implementado de lo exploratorio. | Presentarse como experta en áreas que aún aprende. |

### Pilares narrativos

1. **Observar:** escuchar, investigar, reconocer fricciones, entender el contexto.
2. **Conectar:** ordenar señales, traducir hallazgos, facilitar decisiones entre personas y equipos.
3. **Crear:** diseñar, probar, automatizar y aprender; el valor se demuestra con evidencia y revisión.

**Regla editorial:** en cada caso de estudio debe reconocerse al menos uno de estos verbos, con acciones verificables en vez de promesas abstractas.

## Voz, tono y lenguaje

**Voz constante:** profesional, cálida, precisa y reflexiva. Primera persona cuando narra una contribución propia; reconocer el trabajo del equipo y los límites del alcance.

**Tono por contexto:**

| Contexto | Tono |
|---|---|
| Inicio / presentación | Seguro, cercano y breve. |
| Casos de estudio | Claro, metódico y apoyado en evidencia. |
| Sobre mí | Personal, sereno y con propósito, sin exceso de intimidad. |
| Contacto | Abierto, natural y directo. |
| LinkedIn | Conversacional, útil y concreto; reflexión con un aprendizaje. |

**Sí:** «Analicé incidencias para identificar patrones y coordinar mejoras».

**No:** «Revolucioné la experiencia digital con soluciones disruptivas».

**Sí:** «Desarrollé un motor local de extracción y sigo diseñando su futura experiencia web».

**No:** «Construí una plataforma SaaS escalable en la nube», si aún no se ha implementado.

**Microcopy característico, sujeto a aprobación:** «Primero quiero entender», «Aquí empecé a conectar los puntos», «¿Qué podemos probar?», «Una mejora empieza por escuchar».

**La firma verbal** «observar → conectar → crear» debe usarse con moderación: identificable, no repetida mecánicamente en cada párrafo.

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

## Identidad gráfica y firma

- **Logotipo tipográfico provisional:** «Angela Soplín»; la firma manuscrita sugerida se expresa con Fraunces cursiva en púrpura. No afirmar que sea una firma caligráfica original ni un logotipo vectorial validado.
- **Monograma AS:** recurso funcional para favicon o navegación. No debe imponerse sobre el nombre completo.
- **Fotografía real:** aporta confianza y presencia profesional; mantener facciones y encuadres naturales.
- **Pixel art:** símbolo cercano y creativo, pero subordinado a resultados, proyectos y contenido.
- **Iconografía:** trazos sencillos y coherentes; evitar mezclar íconos 3D, emojis decorativos y pictogramas de estilos opuestos.

## Ilustración pixelada: uso correcto

- Mascota de marca como firma secundaria en Inicio, Sobre mí, Contacto y puntos elegidos del recorrido de los casos; nunca como evidencia de una prueba técnica.
- Situarla **junto al contenido que acompaña**, no después de la conclusión de todas las páginas. Priorizar personaje completo, animación suave y espacio libre de marcos innecesarios.
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

## Movimiento e interactividad · propuesta de sistema

**Principio rector:** «El movimiento acompaña al pensamiento». Incorporarlo para orientar, mostrar relaciones, dar respuesta a una acción o introducir un hito narrativo. Evitar el movimiento como ornamento repetitivo.

| Comportamiento | Uso previsto | Duración inicial orientativa |
|---|---|---|
| Aparición de contenido | Introducir título, evidencia o nuevo apartado al entrar en pantalla, una sola vez. | 350–550 ms |
| Hover / focus | Confirmar interactividad de enlaces, botones o tarjetas. | 150–220 ms |
| Línea de tiempo | Resaltar el hito que se está leyendo; sin desplazar el contenido inesperadamente. | 250–400 ms |
| Transición entre proyectos | Dar continuidad sin ocultar información ni bloquear navegación. | 220–350 ms |
| Pixel art animado | Movimiento propio discreto; no competir con texto ni cifras. | Según recurso aprobado |

**Personalidad del movimiento:** suave, deliberado, humano; evitar rebotes permanentes, parallax extremo, scroll secuestrado, excesivo escalado, destellos y transiciones largas.

**Regla de composición:** no animar todo a la vez; establecer una jerarquía — primero el mensaje, después la evidencia y finalmente el detalle.

**Accesibilidad:** honrar `prefers-reduced-motion`, permitir entender el contenido sin animación, conservar foco visible, apoyar hover con focus, evitar flashes y movimientos que dificulten la lectura.

**Rendimiento:** preferir `transform` y `opacity` cuando correspondan, no bloquear el primer render y no cargar videos pesados innecesariamente. Probar en móvil real.

## Filtro de autenticidad · evitar «estética de plantilla IA»

- No repetir de forma automática la secuencia «tarjeta brillante + ícono flotante + gradiente + sombra» en todas las secciones.
- Evitar degradados neón, fondos oscuros omnipresentes, partículas, brillos y 3D genérico ajeno a la identidad editorial.
- Evitar mensajes vacíos («transformando el futuro», «innovación disruptiva») y promesas técnicas no documentadas.
- Dar prioridad a fotografías propias, decisiones reales, bocetos, artefactos del proyecto y evidencia de trabajo.
- Cada caso debe tener ritmo propio, pero compartir la misma gramática visual.
- Mantener imperfecciones humanas valiosas: preguntas, límites, iteraciones y aprendizajes concretos.

**Prueba de autenticidad:** si quitamos sombras, animaciones y muñequita, ¿todavía se reconoce la voz y manera de trabajar de Angela? Si no, revisar el contenido antes de agregar efectos.

## Interacciones y accesibilidad

- Contraste legible sobre fondo lila y crema; foco visible para teclado.
- Estados hover discretos y consistentes.
- Animaciones opcionales y respeto a `prefers-reduced-motion`.
- Revisar portada y tarjetas en escritorio (≥1024 px), tableta (~768 px) y móvil (360–430 px).

## Aplicaciones y próximos entregables

**Prioridad 1 — Núcleo aprobado:** mantener paleta, tipografía, fotografía real, titular profesional y «observar → conectar → crear».

**Prioridad 2 — Por validar:** formulación de promesa de marca, rasgos de personalidad, sistema de microcopy, firma tipográfica y reglas detalladas de movimiento.

**Prioridad 3 — Por producir:** recurso pixel art final, animado y sin corazones; ejemplos de aplicaciones; componentes reutilizables; inventario de animaciones y guía de uso de marca en LinkedIn, CV y presentaciones.

**Método de trabajo:** validar el criterio de identidad primero, prototipar Home después y extender a los casos únicamente tras revisar interacción, legibilidad y consistencia.

## Alcance de esta versión

Este documento amplía la base visual aplicada con propuestas estratégicas, editoriales y de movimiento que **aún deben validarse** antes de convertirlas en reglas definitivas. La guía documenta el sistema visual aplicado mediante CSS y texto. Las ilustraciones y fotografías son recursos vinculados, no diseños vectoriales originales entregados dentro de este documento. La nueva imagen pixelada final queda pendiente de sustitución binaria en el repositorio.
