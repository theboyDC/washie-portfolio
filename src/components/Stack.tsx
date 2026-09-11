import { stack } from "../data";

export default function Stack() {
  const featured = stack[1];
  const rest = stack.filter((_, i) => i !== 1);
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">(03)</span>
          <h2 className="section-title">Stack</h2>
          <span className="section-rule" />
        </div>
        <div className="stack-feature">
        
          <div className="stack-label">{featured.label}</div>
          <div className="stack-items">
            {featured.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="stack-grid">
          {rest.map((group) => (
            <div className="stack-card" key={group.label}>
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
