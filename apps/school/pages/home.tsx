
const Home = () => {
  return (
    <div>
      <header className="header" data-header>
        <div className="container">
          <h1>
            <a href="#" className="logo">Eduhome</a>
          </h1>
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">Eduhome</a>
              <button className="nav-close-btn" data-nav-toggler>
                CloseIcon
              </button>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-toggler>
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-nav-toggler>
                  About
                </a>
              </li>

              <li className="navbar-item">
                <a href="#event" className="navbar-link" data-nav-toggler>
                  Event
                </a>
              </li>
              <li className="navbar-item">
                <a href="#blog" className="navbar-link" data-nav-toggler>
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="#contact" className="navbar-link" data-nav-toggler>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">

            <button className="header-action-btn" aria-label="Open Search" data-search-btn>
              IconSearch
            </button>

            <a href="" className="header-action-btn login-btn">
              Person Icon
              <span className="span">Login / Register</span>
            </a>

            <button className="header-action btn nav-open-btn" aria-label="Open Menu" data-nav-toggler>
              Menu Outline
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home