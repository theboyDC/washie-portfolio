import { record } from "../data";

export default function About() {
  const featured = record[1];
  const rest = record.filter((_, i) => i !== 1);
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <h2 className="section-title">About my work</h2>
          <span className="section-rule" />
        </div>
        <div className="about-split">
          <div className="about-text">
            <p className="section-intro">
              I work at the layer just underneath the interface — designing backend architectures, wiring up
              RESTful APIs, and keeping data correct across mobile, web, and server. Some of what's here
              started as a WeThinkCode_ exercise; some came out of hackathon weekends building for real
              organizations — a credit-scoring app on the MTN MoMo platform, a digital health passport for the
              Gauteng Department of Health. Alongside that, I tutor fellow students, which keeps me honest
              about actually understanding the fundamentals rather than just getting things to run.
            </p>
            <p className="record-label">The record</p>
            <div className="record-grid">
              {rest.map((r) => (
                <div className="record-cell" key={r.cap}>
                  <p className="record-num">{r.num}</p>
                  <p className="record-cap">{r.cap}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="feature-stat">
            <span className="cover-tag">Headline</span>
            <p className="feature-num">{featured.num}</p>
            <p className="feature-cap">{featured.cap}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
