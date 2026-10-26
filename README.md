# Nextwell, landing page

Sitio de presentación de **Nextwell**: software y soluciones digitales para negocios. Explica qué hace Nextwell (sitios web, sistemas a medida, automatizaciones, soporte, dominios y hosting, infraestructura) y lleva al visitante a pedir una propuesta.

> El siguiente paso hacia algo mejor.

## Tecnologías

- [Next.js 16](https://nextjs.org) con App Router
- React 19 y TypeScript
- CSS propio, sin frameworks de estilos ni librerías de animación
- Tipografías Space Grotesk (títulos) y Plus Jakarta Sans (textos) con `next/font`

## Cómo correrlo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev     # desarrollo en http://localhost:3000
npm run build   # compilación de producción
npm run lint    # revisión con ESLint
```

## Estructura

```
app/
  page.tsx        La página completa: hero, servicios, soluciones, proceso, precios, preguntas y contacto
  layout.tsx      Fuentes, metadatos y la clase .js que activa las animaciones
  globals.css     Todos los estilos y animaciones
components/
  Logo.tsx        Símbolo N de Nextwell en SVG
  Reveal.tsx      Activa las animaciones de entrada al hacer scroll
  Words.tsx       Títulos que suben palabra por palabra
  Odometer.tsx    Precio que gira dígito por dígito
  Solutions.tsx   Muestra de proyectos con pestañas
  TechLogos.tsx   Logos de infraestructura
```

## Diseño y animación

- Paleta: rojo `#DF301C`, naranja `#FF9100`, crema `#FFF1D1`, turquesa `#00B7CD` y azul marino `#0F1B2B`.
- Las animaciones solo usan `transform`, `opacity` y `clip-path`, y se reproducen una vez al entrar en pantalla.
- Si el sistema tiene activado "reducir movimiento", todo aparece sin animación.
- Sin JavaScript, la página se muestra completa en su estado final.

## Flujo de trabajo

Se trabaja en la rama `dev` y los cambios pasan a `main` por pull request (GitHub) o merge request (GitLab).
