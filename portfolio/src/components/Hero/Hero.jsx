import "./Hero.css";
import profile from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="hero-greeting">
          👋 Hello, I'm
        </p>

        <h1>
          Velan D
        </h1>

        <h2>
          Software Engineer | Full Stack Developer
        </h2>

        <p className="hero-description">

          Information Technology student at Madras Institute of Technology,
          passionate about Full Stack Development, React, Django,
          Java and Problem Solving.

        </p>

        <div className="hero-buttons">

          <a href="src\assets\pdf\Velan_Resume.pdf" className="primary-btn">
            Download Resume
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img src={profile} alt="Velan D" />

      </div>

    </section>
  );
};

export default Hero;