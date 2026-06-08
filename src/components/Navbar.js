function Navbar({toggleTheme}) {
  return (
    <nav className="navbar">
      <h2>Portfolio</h2>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        
      </div>
      <button onClick={toggleTheme} className="theme-btn">
        🌙 / ☀️
      </button>
    </nav>
  );
}

export default Navbar;