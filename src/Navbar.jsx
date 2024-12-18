function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="nav-column">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Início
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Artigos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Sobre
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
