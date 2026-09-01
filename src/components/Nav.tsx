export default function Nav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark">
          <span className="dot" />
          Washington Mbeleki
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
        <a className="nav-cta" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}
