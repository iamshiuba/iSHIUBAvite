function Sidebar() {
  return (
    <div className="bg-dark p-4 d-flex justify-content-between">
      <img
        alt="logo"
        onClick={() => (window.location.href = "/")}
        src="https://github.com/iamshiuba/ishiubadj/blob/STARdj2/static/img/ishiubafavicon.png?raw=true"
        className="logo"
      ></img>
      <nav className="d-flex justify-content-evenly">
        <button
          className="btn btn-outline-danger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <span className="text">Menu</span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <img
              className="navbar-brand w-25"
              src="https://github.com/iamshiuba/ishiubadj/blob/STARdj2/static/img/ishiubahor.png?raw=true"
              onClick={() => (window.location.href = "/")}
            ></img>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Streaming
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <p>Copyright © {new Date().getFullYear()} iSHIUBA</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
