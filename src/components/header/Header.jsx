import "./header.css"
const Header = () => {
  return (
    <header className="header">
      <nav className="nav__container">
        <a href="#main" className="nav__logo">
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#main" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              
            <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>
                  Skills
               </a>
              
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
