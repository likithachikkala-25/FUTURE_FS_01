import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2>About Me</h2>
</motion.div>
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p> A responsive portfolio website built using React to showcase my skills,
    projects, and contact information.</p>
          <p className="tech">React • CSS • JavaScript </p>
          <div className="project-links">
  <a href="https://github.com/likithachikkala-25/FUTURE_FS_01" className="btn github">GitHub</a>
         </div>
          
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h3>Food Connect</h3>
          <p> A platform that connects people with surplus food to those in need,
  helping reduce food waste and support communities..</p>
          <p className="tech">HTML • CSS • JavaScript</p>
          <div className="project-links">
  <a href="https://github.com/likithachikkala-25/food-connect" className="btn github">GitHub</a>
  <a href="https://likithachikkala-25.github.io/food-connect/" className="btn live">Live Demo</a>
</div>
          
          
        </div>

        

      </div>
    </section>
  );
}

export default Projects;