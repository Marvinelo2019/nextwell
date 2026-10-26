# Nextwell: landing / portafolio

Landing de Nextwell (software y soluciones digitales para negocios). El objetivo de la página es que un decisor entienda la oferta y pida una propuesta.

La marca, los servicios, los precios y las condiciones comerciales están en `../PRODUCT.md`. Léelo antes de cambiar textos o precios.

## Stack

- Next.js 16 (App Router), React 19, TypeScript. Sin Tailwind ni librerías de animación: los estilos y animaciones están en `app/globals.css`.
- `npm run dev` para desarrollo, `npm run build` para verificar que compila y `npm run lint` antes de entregar.
- `AGENTS.md` lo genera `next dev` solo; avisa que esta versión de Next.js tiene cambios y que la documentación está en `node_modules/next/dist/docs/`.

## Estructura

- `app/page.tsx`: toda la página. Secciones: hero, `#servicios`, `#soluciones`, `#proceso`, `#precios`, `#preguntas`, `#contacto` y footer.
- `components/Reveal.tsx`: un IntersectionObserver que agrega `.in` a `[data-reveal]`, `[data-words]` y `[data-play]` al entrar en pantalla.
- `components/Words.tsx`: títulos que suben palabra por palabra (`data-words`).
- `components/Odometer.tsx`: el precio Q650 que gira dígito por dígito.
- `components/Solutions.tsx`: muestra de proyectos ("Soluciones que hemos creado").
- `components/TechLogos.tsx`: logos de infraestructura (Kubernetes, AWS, Docker, GitLab, NGINX, Nexus Repository, SonarQube).
- `components/Logo.tsx`: símbolo N en SVG con degradados.

## Decisiones de diseño

- El diseño base es la propuesta **a-monumento** (`../heroes/a-monumento.html`). Las otras dos (`b-tablero`, `c-semanas`) se descartaron.
- Paleta: rojo `#DF301C`, naranja `#FF9100`, crema `#FFF1D1`, turquesa `#00B7CD` y azul marino `#0F1B2B`.
- Tipografía: Space Grotesk en títulos y Plus Jakarta Sans en textos.
- El lema "El siguiente paso hacia algo mejor" va grande, con "algo mejor" en rojo.

## Animaciones (ya aprobadas por el usuario)

- Hero: el nombre "nextwell" se abre hacia los lados desde el cuadro azul al cargar.
- Títulos de sección suben palabra por palabra ("Lo que hacemos", "Así trabajamos", "Preguntas antes de empezar", "nextwell." del pie).
- "Lo que hacemos" y "Así trabajamos" se quedan fijos (sticky) mientras pasa su contenido. El usuario decidió que "Así trabajamos" se suelte al terminar el recibo, no al llegar a las preguntas.
- Precios (propuesta C de genjutsu): el turquesa y el rojo suben como telón, luego los textos, los dos "50" se juntan en la barra y Q650 gira como contador.
- Curvas: `--ease-out`, `--ease-expo` (`cubic-bezier(.16, 1, .3, 1)`) y `--ease-io`. No usar `ease` ni `linear` genéricos.
- Todo respeta `prefers-reduced-motion` y se ve completo sin JavaScript.

## Contenido

- Textos en español latino neutro: tuteo con formas estándar ("trabajas", "pide"), sin voseo y sin términos de España ("celular", no "móvil").
- No inventes clientes, testimonios, métricas ni logos de clientes. No hay evidencia real todavía.
- Proyectos de ejemplo: **clasesdebaile.com** es una landing para mostrar el trabajo y pedir cita para clases de baile de bodas, 15 años y graduaciones. **La Magia del Sabor** (panadería) es un sistema a medida complejo y no debe presentarse como una landing.
- Dominio y hosting: si el cliente ya los tiene, se usan; si no, Nextwell los configura y se suman a la facturación.
- Soporte independiente: se estiman 2 días hábiles y el costo es según el alcance.

## Pendientes

- El correo `hola@nextwell.com` (constante `EMAIL` en `app/page.tsx`) es provisional hasta que se compre el dominio.
- Falta agregar el número de WhatsApp.
- El favicon todavía es el de Next.js.
- Ideas propuestas y no aprobadas todavía: scroll suave con Lenis y capturas reales de los proyectos en lugar de las maquetas dibujadas.

## Herramientas de diseño instaladas

Skills globales: `top-design`, `refactoring-ui`, `web-typography`, `genjutsu` (cast, paint, bunshin), `impeccable`, `design-taste-frontend` y las de Emil Kowalski. Para animar algo existente se usó genjutsu `cast` con vista previa en una ruta temporal del proyecto, que se borra al aprobar.

## Git

- Remotos: `origin` en GitHub (`Marvinelo2019/nextwell`, portafolio público) y `gitlab` (`nextwell-resources/landingpage/code`, donde está el CI/CD). La rama `dev` sigue a `gitlab`.
- Se trabaja en `dev` y se pasa a `main` por pull request o merge request.
- **No hagas commit ni push sin que el usuario lo pida explícitamente.** Los commits los maneja el usuario.
