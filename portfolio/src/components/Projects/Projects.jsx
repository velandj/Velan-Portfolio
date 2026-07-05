import "./Projects.css";

const projects = [
  {
    title: "OneStop Career Guidance Portal",
    description:
      "A full-stack Career Guidance Portal that helps students explore career paths, colleges, aptitude quizzes, personalized recommendations, and career roadmaps.",
    technologies: ["React", "Django", "REST API", "Oracle"],
    github: "https://github.com/velandj/onestop",
    live: "#",
  },
  {
    title: "Hostel Management System",
    description:
      "Developed using React, Django, Oracle Database, and REST APIs for efficient hostel management.",
    technologies: ["React", "Django", "Oracle"],
    github: "#",
    live: "#",
  },
  {
    title: "Bank Account Management System",
    description:
      "Built a menu-driven banking application using C++ and Object-Oriented Programming concepts such as Inheritance and Encapsulation.",
    technologies: ["C++", "OOPS"],
    github: "https://github.com/velandj/Bank-Management-System",
    live: "",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github}>GitHub</a>

              {project.live && (
                <a href={project.live}>Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;