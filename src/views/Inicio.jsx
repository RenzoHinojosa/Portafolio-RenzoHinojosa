import { useState } from "react";
import { VscRocket, VscBook, VscDeviceCamera } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { me, projects } from "../data/portfolio";
import { useTyped, Count } from "../components/hooks";
const k = (t) => <span className="k">{t}</span>,
  s = (t) => <span className="s">{t}</span>,
  f = (t) => <span className="f">{t}</span>,
  v = (t) => <span className="v">{t}</span>;
export default function Inicio({ go }) {
  const role = useTyped(me.roles);
  const [src, setSrc] = useState(() => {
    try {
      return localStorage.getItem("foto") || "/foto.jpg";
    } catch {
      return "/foto.jpg";
    }
  });
  const [ok, setOk] = useState(true);
  const pick = (e) => {
    const fl = e.target.files[0];
    if (!fl) return;
    const im = new Image();
    im.onload = () => {
      const m = Math.min(im.width, im.height),
        c = document.createElement("canvas");
      c.width = c.height = Math.min(480, m);
      c.getContext("2d").drawImage(
        im,
        (im.width - m) / 2,
        (im.height - m) / 2,
        m,
        m,
        0,
        0,
        c.width,
        c.height,
      );
      const d = c.toDataURL("image/jpeg", 0.88);
      try {
        localStorage.setItem("foto", d);
      } catch {}
      setSrc(d);
      setOk(true);
    };
    im.src = URL.createObjectURL(fl);
  };
  const L = [
    <>
      {k("const")} {v("dev")} = {"{"}
    </>,
    <>&nbsp;&nbsp;nombre: {s('"Renzo Hinojosa"')},</>,
    <>&nbsp;&nbsp;carrera: {s('"Ing. de Sistemas"')},</>,
    <>&nbsp;&nbsp;universidad: {s('"UNCP"')},</>,
    <>
      &nbsp;&nbsp;stack: [{s('"React"')}, {s('"JS"')}, {s('"Tailwind"')}],
    </>,
    <>
      &nbsp;&nbsp;{f("compilarCafe")}: {k("async")} () {k("=>")} {s('"☕"')},
    </>,
    <>{"}"}</>,
  ];
  return (
    <section className="view hero">
      <div>
        <p className="tag">{'<Portafolio unidad="I" curso="IS093A" />'}</p>
        <h1>
          Hola, soy <span className="grad">Renzo Sebastián</span> Hinojosa
          Yaranga
        </h1>
        <h2 className="role">
          &gt; {role}
          <i className="caret" />
        </h2>
        <p className="lead">
          Estudiante de Ingeniería de Sistemas en la UNCP. Documento aquí mi
          aprendizaje y los proyectos del curso{" "}
          <b>Desarrollo de Aplicaciones Web</b>.
        </p>
        <div className="btns">
          <button className="btn pri" onClick={() => go("proyectos")}>
            <VscRocket /> Ver proyectos
          </button>
          <button className="btn" onClick={() => go("cuaderno")}>
            <VscBook /> Cuaderno
          </button>
          <a className="btn" href={me.github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
        <div className="stats">
          <div>
            <b>
              <Count to={projects.length} />
            </b>
            <span>repositorios</span>
          </div>
          <div>
            <b>
              <Count to={6} />
            </b>
            <span>semanas</span>
          </div>
          <div>
            <b>
              <Count to={8} />+
            </b>
            <span>tecnologías</span>
          </div>
        </div>
      </div>
      <div className="side">
        <label className="avatar" title="Clic para subir tu foto">
          {ok ? (
            <img src={src} alt={me.short} onError={() => setOk(false)} />
          ) : (
            <span>
              <VscDeviceCamera />
              <small>Subir foto</small>
            </span>
          )}
          <input type="file" accept="image/*" hidden onChange={pick} />
        </label>
        <small className="cm">Renzo Hinojosa</small>
        <div className="code">
          {L.map((l, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <em>{i + 1}</em>
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
