import { projects, Project } from "../data";

function Thumb({ kind }: { kind: Project["thumb"] }) {
  if (kind === "pipeline") {
    return (
      <svg viewBox="0 0 130 70" preserveAspectRatio="none">
        <rect width="130" height="70" fill="#F0F0F0" />
        <path d="M0 50 Q 20 20 40 50 T 80 50 T 130 30" stroke="#0A0A0A" strokeWidth="2" fill="none" />
        <circle cx="20" cy="41" r="2.5" fill="#0A0A0A" />
        <circle cx="60" cy="47" r="2.5" fill="#0A0A0A" />
        <circle cx="100" cy="36" r="2.5" fill="#0A0A0A" />
      </svg>
    );
  }
  if (kind === "grid") {
    return (
      <svg viewBox="0 0 130 70" preserveAspectRatio="none">
        <rect width="130" height="70" fill="#F0F0F0" />
        <g stroke="#D6D6D6" strokeWidth="1">
          <line x1="0" y1="17.5" x2="130" y2="17.5" />
          <line x1="0" y1="35" x2="130" y2="35" />
          <line x1="0" y1="52.5" x2="130" y2="52.5" />
          <line x1="26" y1="0" x2="26" y2="70" />
          <line x1="52" y1="0" x2="52" y2="70" />
          <line x1="78" y1="0" x2="78" y2="70" />
          <line x1="104" y1="0" x2="104" y2="70" />
        </g>
        <rect x="60" y="26" width="18" height="18" fill="#0A0A0A" />
        <rect x="90" y="8" width="14" height="14" fill="#8C8C8C" />
      </svg>
    );
  }
  if (kind === "calendar") {
    return (
      <svg viewBox="0 0 130 70" preserveAspectRatio="none">
        <rect width="130" height="70" fill="#F0F0F0" />
        <rect x="14" y="10" width="102" height="50" rx="2" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
        <line x1="14" y1="24" x2="116" y2="24" stroke="#0A0A0A" strokeWidth="1.5" />
        <rect x="24" y="34" width="12" height="10" fill="#0A0A0A" />
        <rect x="44" y="34" width="12" height="10" fill="#D6D6D6" />
        <rect x="64" y="34" width="12" height="10" fill="#D6D6D6" />
        <rect x="84" y="34" width="12" height="10" fill="#8C8C8C" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 130 70" preserveAspectRatio="none">
      <rect width="130" height="70" fill="#F0F0F0" />
      <rect x="48" y="6" width="34" height="58" rx="5" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
      <line x1="55" y1="16" x2="75" y2="16" stroke="#0A0A0A" strokeWidth="2" />
      <line x1="55" y1="26" x2="75" y2="26" stroke="#D6D6D6" strokeWidth="2" />
      <line x1="55" y1="34" x2="68" y2="34" stroke="#D6D6D6" strokeWidth="2" />
      <circle cx="65" cy="56" r="3" fill="#0A0A0A" />
    </svg>
  );
}

function WorkRow({ p }: { p: Project }) {
  const inner = (
    <>
      <span className="work-idx">{p.idx}</span>
      <span className="work-main">
        <p className="work-title">{p.title}</p>
        <p className="work-desc">{p.desc}</p>
        <p className="work-tags">{p.tags}</p>
      </span>
      <span className="work-thumb">
        <Thumb kind={p.thumb} />
      </span>
      <span className="work-arrow">{p.href ? `${p.status} →` : p.status}</span>
    </>
  );

  if (p.href) {
    return (
      <a className="work-row" href={p.href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <div className="work-row work-row--static" aria-disabled="true">
      {inner}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <h2 className="section-title">Selected work</h2>
          <span className="section-rule" />
        </div>
        <div className="work-list">
          {projects.map((p) => (
            <WorkRow p={p} key={p.idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
