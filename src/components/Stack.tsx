import { stack } from "../data";

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">(03)</span>
          <h2 className="section-title">Stack</h2>
          <span className="section-rule" />
        </div>
        <div className="stack-grid">
          {stack.map((group) => (
            <div className="stack-row" key={group.label}>
              <div className="stack-label">{group.label}</div>
              <div className="stack-items">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
