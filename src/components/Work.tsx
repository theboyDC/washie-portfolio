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
  if (kind === "mobile") {
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
  if (kind === "web") {
    return (
      <svg viewBox="0 0 130 70" preserveAspectRatio="none">
        <rect width="130" height="70" fill="#F0F0F0" />
        <rect x="10" y="10" width="110" height="50" rx="2" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
        <line x1="10" y1="20" x2="120" y2="20" stroke="#0A0A0A" strokeWidth="1.5" />
        <circle cx="17" cy="15" r="1.6" fill="#0A0A0A" />
        <circle cx="23" cy="15" r="1.6" fill="#8C8C8C" />
        <circle cx="29" cy="15" r="1.6" fill="#D6D6D6" />
        <circle cx="65" cy="42" r="12" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
        <circle cx="65" cy="42" r="4" fill="#0A0A0A" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 130 70" preserveAspectRatio="none">
      <rect width="130" height="70" fill="#F0F0F0" />
      <rect x="45" y="18" width="40" height="34" rx="3" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="55" cy="30" r="3" fill="#0A0A0A" />
      <circle cx="75" cy="30" r="3" fill="#0A0A0A" />
      <line x1="65" y1="8" x2="65" y2="18" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="65" cy="6" r="2.5" fill="#8C8C8C" />
      <line x1="45" y1="60" x2="35" y2="66" stroke="#0A0A0A" strokeWidth="1.5" />
      <line x1="85" y1="60" x2="95" y2="66" stroke="#0A0A0A" strokeWidth="1.5" />
    </svg>
  );
}

function WorkLinks({ p }: { p: Project }) {
  if (p.href && p.githubHref) {
    return (
      <span className="work-card-links">
        <a href={p.href} target="_blank" rel="noopener noreferrer">
          {p.status} →
        </a>
        <a href={p.githubHref} target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </span>
    );
  }
  if (p.href) {
    return (
      <span className="work-card-links">
        <a href={p.href} target="_blank" rel="noopener noreferrer">
          {p.status} →
        </a>
      </span>
    );
  }
  return <span className="work-card-status">{p.status}</span>;
}

function WorkCard({ p }: { p: Project }) {
  return (
    <div className="work-card">
      <div className="work-card-thumb">
        <Thumb kind={p.thumb} />
      </div>
      <div className="work-card-body">
        <div className="work-card-head">
          <span className="work-idx">{p.idx}</span>
          <p className="work-title">{p.title}</p>
        </div>
        <p className="work-desc">{p.desc}</p>
        <p className="work-tags">{p.tags}</p>
        <div className="work-card-foot">
          <WorkLinks p={p} />
        </div>
      </div>
    </div>
  );
}

function WorkFeature({ p }: { p: Project }) {
  return (
    <div className="work-feature">
      <span className="cover-tag">Featured</span>
      <div className="work-feature-media">
        <Thumb kind={p.thumb} />
      </div>
      <div className="work-feature-body">
        <div className="work-card-head">
          <span className="work-idx">{p.idx}</span>
          <h3 className="work-feature-title">{p.title}</h3>
        </div>
        <p className="work-feature-desc">{p.desc}</p>
        <p className="work-tags">{p.tags}</p>
        <div className="work-card-foot">
          <WorkLinks p={p} />
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [featured, ...rest] = projects;
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">(01)</span>
          <h2 className="section-title">Selected work</h2>
          <span className="section-rule" />
        </div>
        <WorkFeature p={featured} />
        <div className="work-grid">
          {rest.map((p) => (
            <WorkCard p={p} key={p.idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
