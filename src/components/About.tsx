import { record } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">(01)</span>
          <h2 className="section-title">About my work</h2>
          <span className="section-rule" />
        </div>
        <p className="section-intro">
          I work at the layer just underneath the interface — pulling and cleaning data, designing
          schemas, and keeping a server correct when multiple clients hit it at once. Most of what's
          here started as a WeThinkCode_ exercise or a personal build, then turned into something I
          kept iterating on. Alongside that, I tutor fellow students, which keeps me honest about
          actually understanding the fundamentals rather than just getting things to run.
        </p>

        <p className="record-label">The record</p>
        <div className="record-grid">
          {record.map((r) => (
            <div className="record-cell" key={r.cap}>
              <p className="record-num">{r.num}</p>
              <p className="record-cap">{r.cap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
