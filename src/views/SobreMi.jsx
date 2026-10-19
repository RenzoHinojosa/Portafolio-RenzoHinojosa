import * as Si from 'react-icons/si'
import { VscAccount, VscTools } from 'react-icons/vsc'
import { skills, me } from '../data/portfolio'
import { Icon, Fold } from '../components/hooks'
export default function SobreMi() {
  return (
    <section className="view">
      <h1 className="title"><span className="k">class</span> <span className="f">SobreMi</span> {'{'}</h1>
      <div className="two">
        <Fold title="Perfil" icon={<VscAccount />}>
          <p>Soy estudiante de <b>Ingeniería de Sistemas</b> en la {me.uni}. Me apasiona el desarrollo web, en especial el <b>Frontend</b>: crear interfaces atractivas, interactivas y responsivas.</p>
          <p>En estas semanas pasé de HTML, CSS y JavaScript a React y Tailwind CSS. Busco retos que me hagan mejorar y aportar soluciones innovadoras.</p>
          <p className="cm">// Docente: {me.teacher}<br />// Curso: {me.course}</p>
        </Fold>
        <Fold title="Habilidades técnicas" icon={<VscTools />}>
          {skills.map(([n, p, ic], i) => (
            <div className="skill" key={n}>
              <span><Icon set={Si} name={ic} /> {n}</span>
              <div className="bar"><i style={{ '--w': p + '%', animationDelay: i * 0.1 + 's' }} /></div>
              <em>{p}%</em>
            </div>
          ))}
        </Fold>
      </div>
    </section>
  )
}
