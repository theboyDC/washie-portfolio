export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <p className="contact-title">Let's talk</p>
        <p className="contact-desc">
          Looking for a graduate role, internship, or a project collaborator — email is the fastest
          way to reach me, and GitHub stays current with whatever I'm building.
        </p>
        <div className="foot-cols">
          <div className="foot-col">
            <p className="foot-col-label">Contact</p>
            <a href="mailto:washiembeleki2003@gmail.com">washiembeleki2003@gmail.com</a>
            <a href="tel:+27844969910">084 496 9910</a>
          </div>
          <div className="foot-col">
            <p className="foot-col-label">Elsewhere</p>
            <a href="https://github.com/theboyDC" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/washie" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="foot-col">
            <p className="foot-col-label">Based in</p>
            <span>Johannesburg, Gauteng</span>
            <span>1821, South Africa</span>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Washington Mbeleki</span>
          <span>Built with React &amp; TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
