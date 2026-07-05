import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiC,
  SiCplusplus,
  SiDjango,
  SiMongodb,
  SiSqlite,
  SiCreatereactapp
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">My Skills</h2>

      {/* Programming */}

      <div className="skill-category">

        <h3>Programming Languages</h3>

        <div className="skills-grid">

          <div className="skill-card">
            <SiC />
            <span>C</span>
          </div>

          <div className="skill-card">
            <SiCplusplus />
            <span>C++</span>
          </div>

          <div className="skill-card">
            <FaJava />
            <span>Java</span>
          </div>

          <div className="skill-card">
            <FaPython />
            <span>Python</span>
          </div>

          <div className="skill-card">
            <SiJavascript />
            <span>JavaScript</span>
          </div>

        </div>

      </div>

      {/* Frontend */}

      <div className="skill-category">

        <h3>Frontend</h3>

        <div className="skills-grid">

          <div className="skill-card">
            <FaHtml5 />
            <span>HTML5</span>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <span>CSS3</span>
          </div>

          <div className="skill-card">
            <FaReact />
            <span>React</span>
          </div>

        </div>

      </div>

      {/* Backend */}

      <div className="skill-category">

        <h3>Backend</h3>

        <div className="skills-grid">

          <div className="skill-card">
            <SiDjango />
            <span>Django</span>
          </div>

          <div className="skill-card">
            <span>REST API</span>
          </div>

          <div className="skill-card">
            
            <span>CRUD</span>
          </div>

          <div className="skill-card">
            <span>OOPS</span>
          </div>

        </div>

      </div>

      {/* Database */}

<div className="skill-category">

  <h3>Database</h3>

  <div className="skills-grid">

    <div className="skill-card">
      <FaDatabase />
      <span>Oracle SQL</span>
    </div>

    <div className="skill-card">
      <SiSqlite/>
      <span>SQL Lite</span>
    </div>

    <div className="skill-card">
      <SiMongodb />
      <span>MongoDB</span>
    </div>

  </div>

</div>

      {/* Tools */}

      <div className="skill-category">

        <h3>Tools</h3>

        <div className="skills-grid">

          <div className="skill-card">
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div className="skill-card">
            <FaGithub />
            <span>GitHub</span>
          </div>

          <div className="skill-card">
            <VscVscode />
            <span>VS Code</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;