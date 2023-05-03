import Project from "../Project/Project";
import "./Projects.css";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/yantavares/repos";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [projects, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const resp = await fetch(url);
        const projects = await resp.json();
        setProject(projects);
        console.log(projects);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    fetchProject();
  }, []);

  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (isError) {
    return <h2>Error!</h2>;
  }

  return (
    <div className="projects">
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            html_url={project.html_url}
            owner={project.owner}
          />
        );
      })}
    </div>
  );
};
export default Projects;
