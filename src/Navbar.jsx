function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="nav-column">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Início</a>
          <a className="nav-link" aria-current="page" href="/">Streaming</a>
          <a className="nav-link" aria-current="page" href="/">Artigos</a>
          <a className="nav-link" aria-current="page" href="/">Sobre</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;