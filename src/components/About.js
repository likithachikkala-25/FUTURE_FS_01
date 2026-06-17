import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2>About Me</h2>
</motion.div>
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT SIDE - TEXT */}
        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I am a passionate and dedicated Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world digital experiences using technologies like HTML, CSS, JavaScript, and React.
          </p>

          <p> 
          I have hands-on experience developing projects that focus on clean design, performance, and usability. I am always eager to learn new technologies and continuously improve my skills to stay updated with the latest industry trends.
          </p>

          <p>
          I am particularly interested in creating intuitive user interfaces and enhancing user experience through creative design and efficient coding practices. I believe in writing clean, maintainable code and collaborating effectively to deliver high-quality solutions.
          </p>

          <p> 
          Currently, I am looking for opportunities where I can apply my skills, contribute to meaningful projects, and grow as a developer in a professional environment.

          </p>


          </div>

        

      </div>
    </section>
  );
}

export default About;