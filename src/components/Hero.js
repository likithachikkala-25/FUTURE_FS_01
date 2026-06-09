function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero-name">LIKITHA CHIKKALA</h1>

      <h2 className="hero-role">Full Stack Web Developer</h2>

      <p className="hero-desc">
        I build modern, responsive, and user-friendly web applications.
      </p>

      <div className="hero-buttons">
        <a href="#contact" className=" hero-btn primary">Hire Me</a>
      
        <div className="social-row">
        <a 
          href="https://www.linkedin.com/in/likitha-chikkala-403030301/" 
          className="hero-btn linkedin"
        >
          LinkedIn
        </a>

        <a 
          href="https://github.com/likithachikkala-25" 
          className="hero-btn github"
        >
          GitHub
        </a>
      </div>
    </div>
    </section>
  );
}

export default Hero;