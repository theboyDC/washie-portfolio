import { experience, certs } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">(04)</span>
          <h2 className="section-title">Experience</h2>
          <span className="section-rule" />
        </div>

        <div className="timeline">
          {experience.map((e) => (
            <div className="tl-item" key={e.role}>
              <p className="tl-role">{e.role}</p>
              <p className="tl-meta">{e.meta}</p>
              <ul className="tl-desc">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="edu-role">Diploma in Software Engineering — 2nd Year</p>
        <p className="edu-meta">WeThinkCode_, Johannesburg · Oct 2025 – Feb 2027 (Expected)</p>

        <ul className="cert-list">
          {certs.map((c) => (
            <li key={c.name}>
              <span>{c.name}</span>
              <span className="cert-meta">{c.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
