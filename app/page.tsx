import type { CSSProperties, ReactNode } from "react";
import { Arrow, LogoDefs, Symbol } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import Solutions from "@/components/Solutions";
import TechLogos from "@/components/TechLogos";
import Odometer from "@/components/Odometer";
import Words from "@/components/Words";

const EMAIL = "hola@nextwell.com";

const at = (i: number) => ({ ["--i" as string]: i }) as CSSProperties;

type Service = { title: string; text: string; items: string[]; screen: ReactNode };

// Interface fragments next to each service are illustrative.
const services: Service[] = [
  {
    title: "Sitios web y landing pages",
    text: "Diseñamos páginas modernas, adaptadas a celular y enfocadas en presentar tu negocio y generar consultas.",
    items: ["Diseño pensado primero para celular", "Botón de WhatsApp y formulario", "Textos claros sobre lo que ofreces", "Listas para aparecer en Google"],
    screen: (
      <div className="frag phone">
        <b>clasesdebaile.com</b>
        <p>Aprende a bailar para tu boda, tus 15 años o tu graduación.</p>
        <span className="btn">Pedir cita</span>
        <div className="ln"><span>Bodas · 15 años</span><em>Graduaciones</em></div>
      </div>
    ),
  },
  {
    title: "Sistemas a medida",
    text: "Desarrollamos herramientas para organizar clientes, citas, pedidos y procesos según las necesidades de tu negocio.",
    items: ["Clientes y su historial", "Citas y agenda", "Pedidos y entregas", "Reportes de tu operación"],
    screen: (
      <div className="frag">
        <b>Clientes</b>
        <div className="ln"><span>Ferretería El Sol</span><em>12 pedidos</em></div>
        <div className="ln"><span>Clínica Norte</span><em>8 citas</em></div>
        <div className="ln"><span>Café Aurora</span><em>31 pedidos</em></div>
        <div className="ln"><span>Estudio Vera</span><em>4 citas</em></div>
      </div>
    ),
  },
  {
    title: "Automatización e integraciones",
    text: "Conectamos herramientas y automatizamos tareas repetitivas para reducir trabajo manual.",
    items: ["Recordatorios y mensajes automáticos", "Formularios que llegan a tu sistema", "Tus herramientas conectadas entre sí", "Menos captura manual de datos"],
    screen: (
      <div className="frag flow">
        <span className="node">Nuevo pedido en tu web</span>
        <span className="arr" aria-hidden="true">↓</span>
        <span className="node">Se registra en tu sistema</span>
        <span className="arr" aria-hidden="true">↓</span>
        <span className="node ok">Aviso por WhatsApp al cliente</span>
      </div>
    ),
  },
  {
    title: "Soporte y mejora tecnológica",
    text: "Actualizamos páginas web, corregimos errores y mejoramos sistemas existentes.",
    items: ["Actualización de sitios existentes", "Corrección de errores", "Páginas más rápidas", "Nuevas funciones en lo que ya usas"],
    screen: (
      <div className="frag">
        <b>Cambios de esta semana</b>
        <div className="ln"><span className="chip ok">Corregido</span><em>Formulario de contacto</em></div>
        <div className="ln"><span className="chip">Mejorado</span><em>Carga del catálogo</em></div>
        <div className="ln"><span className="chip pd">Nuevo</span><em>Reporte mensual</em></div>
      </div>
    ),
  },
  {
    title: "Dominios, hosting y correo empresarial",
    text: "Si ya tienes dominio y hosting, trabajamos con ellos. Si no, los configuramos por ti y se suman a tu factura.",
    items: ["Usamos tu dominio si ya lo tienes", "Si no, lo registramos por ti", "Hosting y correo con el nombre de tu negocio", "Certificado de seguridad activo"],
    screen: (
      <div className="frag">
        <b>tunegocio.com</b>
        <div className="ln"><span>Dominio</span><em className="ok">Activo</em></div>
        <div className="ln"><span>Certificado</span><em className="ok">Vigente</em></div>
        <div className="ln"><span>ventas@tunegocio.com</span><em>Correo</em></div>
      </div>
    ),
  },
  {
    title: "Infraestructura y DevOps",
    text: "Implementamos y damos soporte a servidores, contenedores y procesos de despliegue para aplicaciones.",
    items: ["Servidores y contenedores", "Despliegues automatizados", "Monitoreo y respaldos", "Soporte para tus aplicaciones"],
    screen: <TechLogos />,
  },
];

const steps = [
  { when: "Primera llamada", rows: [["Conocemos tu negocio y lo que necesitas", "45 min"], ["Definimos qué resolver primero", "misma llamada"]] },
  { when: "Primera semana", rows: [["Te enviamos alcance, tiempos y precio", "2 a 3 días"], ["Revisamos juntos un prototipo", "1 semana"]] },
  { when: "Si es una landing page", rows: [["Te mostramos el primer avance", "semana 1"], ["Entregamos tu landing publicada", "semana 2"]] },
  { when: "Si es un sistema", rows: [["Te enviamos el avance de la semana", "domingo por la noche"], ["Soporte independiente, con costo según el alcance", "2 días hábiles"]] },
];

// Zigzag cut along the slip's bottom edge.
const TEETH = 22;
const zigzag = `polygon(0 0, 100% 0, ${Array.from({ length: TEETH * 2 + 1 }, (_, k) => {
  const x = 100 - (k * 100) / (TEETH * 2);
  return `${x.toFixed(3)}% ${k % 2 ? "100%" : "calc(100% - 12px)"}`;
}).join(", ")})`;

const faqs = [
  ["¿Cuánto cuesta un proyecto?", "Una landing page se paga 50% al iniciar y 50% al entregar. Los sistemas tienen un setup inicial, que puede pagarse en dos partes, y un soporte mensual de Q650. Después de la primera llamada te enviamos la propuesta exacta."],
  ["¿Cuánto tiempo tarda?", "Una landing page está lista en dos semanas: el avance en la primera y la entrega en la segunda, siempre que ya tengamos tus fotos, textos y recursos. En los sistemas te enviamos el avance cada domingo por la noche."],
  ["¿Trabajan con negocios pequeños?", "Sí. Nuestras soluciones están pensadas para negocios como consultorios, restaurantes, salones de belleza y negocios de pedidos y entregas."],
  ["¿Pueden mejorar un sitio o sistema que ya tengo?", "Sí. Revisamos lo que tienes, corregimos errores y lo mejoramos sin empezar de cero cuando no hace falta."],
  ["¿Se encargan del dominio, el hosting y el correo?", "Si ya tienes dominio y hosting, usamos los tuyos. Si no, los configuramos por ti, junto con el correo con el nombre de tu negocio, y se suman a tu factura."],
  ["¿Qué pasa después de la entrega?", "En las landing pages, el soporte y el mantenimiento se acuerdan contigo. En los sistemas, el soporte mensual cubre mantenimiento, alta disponibilidad y cambios dentro del alcance; los cambios de lógica o de backend se cotizan desde Q350."],
];

function Name() {
  return (
    <span className="unit">
      nextwell<span className="dot"></span>nextwell<span className="dot"></span>nextwell<span className="dot"></span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <LogoDefs />
      <Reveal />

      <main>
        <section className="hero" aria-label="Inicio">
          <header className="top">
            <a className="link rise" href="#servicios"><span>Servicios</span></a>
            <a className="mark rise d1" href="#" aria-label="Nextwell, inicio">
              <Symbol />
              <span>nextwell<i>.</i></span>
            </a>
            <a className="link rise d2" href="#contacto"><span>Contacto</span></a>
          </header>

          <div className="square" aria-hidden="true"><Symbol /></div>

          <h1 className="line">
            <span className="sr">nextwell, software a medida para tu negocio</span>
            <span className="track" aria-hidden="true"><Name /><Name /></span>
          </h1>
          <div className="line lit" aria-hidden="true">
            <span className="track"><Name /><Name /></span>
          </div>

          <div className="copy rise d2">
            <p className="lead">Creamos páginas web, sistemas y automatizaciones a la medida de tu negocio, con avances que ves desde el inicio.</p>
            <p className="fact">El siguiente paso hacia <b>algo mejor.</b></p>
          </div>

          <div className="bottom">
            <span className="where rise d3">Software &amp; Digital Solutions</span>
            <a className="cta rise d3" href="#contacto">Pide tu propuesta <Arrow /></a>
          </div>
        </section>

        <section className="services" id="servicios" aria-labelledby="srv-title">
          <h2 id="srv-title" className="sticky-head" data-words><Words text="Lo que hacemos" /></h2>
          <div className="srv-list">
            {services.map((s, i) => (
              <article className={`srv${i % 2 ? " flip" : ""}`} key={s.title}>
                <h3 data-reveal>{s.title}</h3>
                <div className="srv-row">
                  <figure className="srv-pic" data-ui data-reveal style={at(1)}>{s.screen}</figure>
                  <div className="srv-text" data-reveal style={at(2)}>
                    <p>{s.text}</p>
                    <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Solutions />

        <section className="process" id="proceso" aria-labelledby="proc-title">
          <div className="proc-intro">
            <h2 id="proc-title" data-words><Words text="Así trabajamos" /></h2>
            <p data-reveal style={at(1)}>Avanzamos por etapas cortas para que veas resultados pronto y tomes decisiones con algo real en la mano.</p>
            <p className="proc-note" data-reveal style={at(2)}>Los tiempos de una landing page corren desde que nos entregas tus fotos, textos y recursos.</p>
          </div>
          <div className="slip" data-reveal style={{ ...at(2), clipPath: zigzag }}>
            {steps.map((st) => (
              <div className="slip-group" key={st.when}>
                <h3>{st.when}</h3>
                {st.rows.map(([what, time]) => (
                  <div className="slip-row" key={what}>
                    <span>{what}</span><span className="leader" aria-hidden="true"></span><span className="time">{time}</span>
                  </div>
                ))}
              </div>
            ))}
            <div className="slip-total"><span>Tu landing page lista</span><span>2 semanas</span></div>
          </div>
        </section>

        <section className="pricing" id="precios" aria-labelledby="price-title" data-play>
          <h2 id="price-title" className="sr">Cómo cobramos</h2>
          <article className="plan-field plan-landing">
            <div>
              <h3>Landing page</h3>
              <p className="plan-for">Para presentar tu negocio y recibir consultas.</p>
              <p className="plan-inc">Avance en la primera semana y entrega en la segunda. El soporte y el mantenimiento se acuerdan contigo.</p>
            </div>
            <div className="plan-foot">
              <p className="price"><span className="sr">50/50</span><span className="half l" aria-hidden="true">50</span><span className="slash" aria-hidden="true">/</span><span className="half r" aria-hidden="true">50</span><small>al iniciar y al entregar</small></p>
              <a className="plan-btn" href="#contacto">Cotizar landing</a>
            </div>
          </article>
          <article className="plan-field plan-system">
            <div>
              <h3>Sistemas y soluciones</h3>
              <p className="plan-for">Para negocios que necesitan organizar citas, pedidos o clientes.</p>
              <p className="plan-inc">Un setup inicial adapta la solución a tu negocio y puede pagarse en dos partes. El soporte mensual cubre mantenimiento, alta disponibilidad y cambios dentro del alcance. Los cambios de lógica o de backend, desde Q350.</p>
            </div>
            <div className="plan-foot">
              <p className="price"><Odometer value="Q650" /><small>al mes</small></p>
              <a className="plan-btn" href="#contacto">Cotizar sistema</a>
            </div>
          </article>
        </section>

        <section className="faq" id="preguntas" aria-labelledby="faq-title">
          <h2 id="faq-title" data-words><Words text="Preguntas antes de empezar" /></h2>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <details key={q} data-reveal style={at(i % 3)}>
                <summary>
                  {q}
                  <svg className="chev" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <h2 id="contact-title" className="contact-say" data-reveal>Cuéntanos qué necesita tu negocio y te respondemos con una propuesta.</h2>
          <a className="mail" href={`mailto:${EMAIL}?subject=Quiero%20una%20propuesta`} data-reveal style={at(1)}>{EMAIL.split("@")[0]}@<wbr />{EMAIL.split("@")[1]}</a>
          <div className="contact-foot">
            <span>Software &amp; Digital Solutions</span>
          </div>
        </section>
      </main>

      <footer className="foot">
        <p className="foot-name" aria-hidden="true" data-words><span className="w"><span>nextwell<i>.</i></span></span></p>
        <div className="foot-row">
          <ul className="places">
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href="#contacto">Pide tu propuesta</a></li>
          </ul>
          <nav className="foot-links" aria-label="Pie de página">
            <div>
              <h2>Servicios</h2>
              <ul>{services.map((s) => <li key={s.title}><a href="#servicios">{s.title}</a></li>)}</ul>
            </div>
            <div>
              <h2>Soluciones</h2>
              <ul>
                <li><a href="#soluciones">Nutri360</a></li>
                <li><a href="#soluciones">Smart Service</a></li>
                <li><a href="#soluciones">Ordena</a></li>
                <li><a href="#soluciones">Agenda para salones</a></li>
              </ul>
            </div>
            <div>
              <h2>Nextwell</h2>
              <ul>
                <li><a href="#proceso">Así trabajamos</a></li>
                <li><a href="#preguntas">Preguntas</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="legal">
          <span>© 2026 Nextwell. El siguiente paso hacia algo mejor.</span>
          <a href="#">Volver arriba</a>
        </div>
      </footer>
    </>
  );
}
