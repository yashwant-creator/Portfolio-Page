import React from "react";
import "../css/projects.css";

const projects = [
  {
    title: "College Tracker App",
    description: "Full-Stack A web app where a student can:add colleges, see important deadlines in a visual timeline, get basic info about each college (fees, cost of attendance, facts, prompts)",
    link: "https://github.com/yashwant-creator/PortfolioPage",
    technologies: ["React", "Vite", "CSS","SupaBase"]
  },
  {
    title: "International Space Station App",
    description: "An app that tracks the location of ISS (International Space Station)",
    link: "https://github.com/yashwant-creator/WeatherApp",
    technologies: ["React-Native", "Nasa API", "CSS", "HTML","JavaScript"]
  },
    {
    title: "Student Attendance App",
    description: "An app that tracks attendance of students",
    link: "https://github.com/yashwant-creator/WeatherApp",
    technologies: ["React-Native", "Firebase", "Database"]
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
  <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, tIdx) => (
                <span className="tech-button" key={tIdx}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
