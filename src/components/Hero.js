import profile from "../profile.png";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
      {/* Left Side*/}
      <div className="hero-text">

      
      <h1 className="hero-name">LIKITHA CHIKKALA</h1>

      <h2 className="hero-role">Frontend  Developer</h2>


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
      <a href="/my_resume.pdf" download className=" hero-btn resume resume-center" >Download Resume</a>

    </div>

    </div>
    {/*Right Side*/}
      <div className="hero-image">
        <img src={profile} alt="Hero" />
      </div>
      </div>
    </section>
  );
}

export default Hero;