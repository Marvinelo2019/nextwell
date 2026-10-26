"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Solution = {
  id: string;
  tab: string;
  title: string;
  text: string;
  plate: string;
  screen: ReactNode;
};

// Sample data inside each screen is illustrative.
const solutions: Solution[] = [
  {
    id: "nutri360",
    tab: "Nutri360",
    title: "Nutri360",
    text: "Gestión para profesionales de la nutrición: pacientes, agenda, evaluaciones y planes de alimentación en un solo lugar.",
    plate: "var(--teal)",
    screen: (
      <div className="scr">
        <div className="scr-head"><b>Laura Méndez</b><span className="chip ok">Cita jueves 10:30</span></div>
        <div className="kpis">
          <div><small>Peso</small><strong>68,4 kg</strong><em className="ok">−1,2 kg</em></div>
          <div><small>Plan diario</small><strong>1.800 kcal</strong><em>Semana 3</em></div>
        </div>
        <div className="ln"><span>Desayuno</span><em>Avena con fruta</em></div>
        <div className="ln"><span>Comida</span><em>Pollo, arroz y ensalada</em></div>
        <div className="ln"><span>Cena</span><em>Omelette de verduras</em></div>
        <span className="btn">Nueva evaluación</span>
      </div>
    ),
  },
  {
    id: "smart-service",
    tab: "Smart Service",
    title: "Smart Service",
    text: "Lista de espera y asignación de mesas para restaurantes: cada cliente sabe cuánto falta y tu equipo sabe qué mesa sigue.",
    plate: "var(--red)",
    screen: (
      <div className="scr">
        <div className="scr-head"><b>Lista de espera</b><span className="chip">5 grupos</span></div>
        <div className="ln"><span>García · 4 personas</span><em>12 min</em></div>
        <div className="ln"><span>Rojas · 2 personas</span><em>18 min</em></div>
        <div className="ln"><span>Fuentes · 6 personas</span><em>25 min</em></div>
        <div className="tables">
          <span className="t busy">1</span><span className="t">2</span><span className="t busy">3</span>
          <span className="t next">4</span><span className="t busy">5</span><span className="t">6</span>
        </div>
        <span className="btn">Asignar mesa 4</span>
      </div>
    ),
  },
  {
    id: "ordena",
    tab: "Ordena",
    title: "Ordena",
    text: "Clientes, pedidos, menús, producción, entregas y cobros organizados de principio a fin, para que nada se quede en un chat.",
    plate: "var(--orange)",
    screen: (
      <div className="scr">
        <div className="scr-head"><b>Pedidos de hoy</b><span className="chip">24 pedidos</span></div>
        <div className="stages">
          <div><small>Recibidos</small><strong>6</strong></div>
          <div><small>En producción</small><strong>9</strong></div>
          <div><small>En camino</small><strong>5</strong></div>
          <div><small>Cobrados</small><strong>4</strong></div>
        </div>
        <div className="ln"><span>#1182 · Café Aurora</span><em className="pd">En camino</em></div>
        <div className="ln"><span>#1183 · Oficina Delta</span><em>En producción</em></div>
        <div className="ln"><span>#1184 · Sra. Paredes</span><em className="ok">Cobrado</em></div>
      </div>
    ),
  },
  {
    id: "agenda",
    tab: "Agenda para salones",
    title: "Agenda para salones de belleza",
    text: "Citas, disponibilidad de cada estilista y la ocupación de la semana a la vista, sin cuadernos ni mensajes perdidos.",
    plate: "var(--navy-2)",
    screen: (
      <div className="scr">
        <div className="scr-head"><b>Semana del 3 al 8</b><span className="chip ok">78 % ocupado</span></div>
        <div className="week">
          <span></span><small>L</small><small>M</small><small>X</small><small>J</small><small>V</small><small>S</small>
          <small>Ana</small><i className="h"></i><i className="h"></i><i></i><i className="h"></i><i className="h"></i><i className="h"></i>
          <small>Sofía</small><i></i><i className="h"></i><i className="h"></i><i className="h"></i><i></i><i className="h"></i>
          <small>Marco</small><i className="h"></i><i></i><i className="h"></i><i></i><i className="h"></i><i className="h"></i>
        </div>
        <div className="ln"><span>Hoy 16:00 · Corte y color</span><em>Ana</em></div>
        <span className="btn">Agendar cita</span>
      </div>
    ),
  },
];

export default function Solutions() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    const next = (active + dir + solutions.length) % solutions.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="showcase" id="soluciones" aria-labelledby="sol-title">
      <div className="show-plate" data-reveal>
        {solutions.map((s, i) => (
          <figure
            key={s.id}
            className={`plate${i === active ? " on" : ""}`}
            style={{ background: s.plate }}
            data-ui
            aria-hidden={i !== active}
          >
            {s.screen}
          </figure>
        ))}
      </div>

      <div className="show-text">
        <div>
          <h2 id="sol-title" data-reveal>Soluciones que hemos creado</h2>
          <div className="tabs" role="tablist" aria-label="Soluciones" onKeyDown={onKey} data-reveal style={{ ["--i" as string]: 1 }}>
            {solutions.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => { tabs.current[i] = el; }}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${s.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="panels">
          {solutions.map((s, i) => (
            <div
              key={s.id}
              id={`panel-${s.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${s.id}`}
              hidden={i !== active}
              className="panel"
            >
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="cells" data-reveal style={{ ["--i" as string]: 2 }}>
          <a className="cell ink" href="#contacto">Quiero algo así</a>
          <a className="cell tone" href="#servicios">Ver servicios</a>
        </div>
      </div>
    </section>
  );
}
