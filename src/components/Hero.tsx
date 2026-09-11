export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="wrap hero-inner">
        <div className="hero-text">
          <p className="kicker">Software Engineer &amp; Data Engineer — Johannesburg, ZA</p>
          <h1 className="headline">Building systems that move data and hold state correctly.</h1>
          <p className="hero-desc">
            I'm a final-year Software Engineering and Data Engineering student at WeThinkCode_, building
            backend systems, data pipelines, and mobile apps — including a hackathon-winning fintech app and
            a health-tech platform for the Gauteng Department of Health. I also tutor incoming student cohorts
            as a Peer Tutor and Bootcamp Assistant.
          </p>
          <div className="hero-links">
            <a className="btn primary" href="mailto:washiembeleki2003@gmail.com">
              Email me
            </a>
            <a className="btn" href="https://github.com/theboyDC" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/washie"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
            <svg className="scroll-mouse" viewBox="0 0 22 34" fill="none" aria-hidden="true">
              <rect x="1.5" y="1.5" width="19" height="31" rx="9.5" stroke="currentColor" strokeWidth="2" />
              <circle className="scroll-wheel" cx="11" cy="10" r="2.4" fill="currentColor" />
            </svg>
            <span>Scroll</span>
          </a>
        </div>
        <div className="hero-photo-col">
       
          <div className="hero-photo">
            <img src="/washie-portrait (Edited).jpg" alt="Washington Mbeleki" />
          </div>
        </div>
      </div>
    </section>
  );
}
