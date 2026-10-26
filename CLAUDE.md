# Nextwell: landing / portafolio

Landing de Nextwell (software y soluciones digitales para negocios). El objetivo de la página es que un decisor entienda la oferta y pida una propuesta.

La marca, los servicios, los precios y las condiciones comerciales están en `../PRODUCT.md`. Léelo antes de cambiar textos o precios.

## Stack

- Next.js 16 (App Router), React 19, TypeScript. Sin Tailwind: los estilos están en `app/globals.css`.
- `npm run dev` para desarrollo y `npm run build` para verificar que compila.

## Estructura

- `app/page.tsx`: toda la página. Secciones: hero, `#servicios`, `#soluciones`, `#proceso`, `#precios`, `#preguntas`, `#contacto` y footer.
- `components/Solutions.tsx`: muestra de proyectos ("Soluciones que hemos creado").
- `components/TechLogos.tsx`: logos de infraestructura (Kubernetes, AWS, Docker, GitLab, NGINX, Nexus Repository, SonarQube).
- `components/Logo.tsx`: símbolo N en SVG con degradados.
- `components/Reveal.tsx`: animaciones de entrada al hacer scroll (`data-reveal`).

## Decisiones de diseño

- El diseño base es la propuesta **a-monumento** (`../heroes/a-monumento.html`). Las otras dos (`b-tablero`, `c-semanas`) se descartaron.
- Paleta: rojo `#DF301C`, naranja `#FF9100`, crema `#FFF1D1`, turquesa `#00B7CD` y azul marino `#0F1B2B`.
- Tipografía: Space Grotesk en títulos y Plus Jakarta Sans en textos.
- El lema "El siguiente paso hacia algo mejor" va en tamaño grande, con "algo mejor" en rojo.

## Contenido

- Textos en español latino neutro: tuteo con formas estándar ("trabajas", "pide"), sin voseo y sin términos de España ("celular", no "móvil").
- No inventes clientes, testimonios, métricas ni logos de clientes. No hay evidencia real todavía.
- Proyectos de ejemplo: **clasesdebaile.com** es una landing para mostrar el trabajo y pedir cita para clases de baile de bodas, 15 años y graduaciones. **La Magia del Sabor** (panadería) es un sistema a medida complejo y no debe presentarse como una landing.
- Dominio y hosting: si el cliente ya los tiene, se usan; si no, Nextwell los configura y se suman a la facturación.

## Pendientes

- El correo `hola@nextwell.com` (constante `EMAIL` en `app/page.tsx`) es provisional hasta que se compre el dominio.
- Falta agregar el número de WhatsApp.
- El favicon todavía es el de Next.js.

## Git

- Repositorio: `github.com/Marvinelo2019/nextwell`. Se trabaja en `dev` y se envía a `main` por pull request.
