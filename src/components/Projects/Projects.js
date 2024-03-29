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

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    fetchProject();
  }, []);

  if (isLoading) {
    return <div className="custom-loader"></div>;
  }

  if (
    isError ||
    projects.documentation_url ===
      "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
  ) {
    return (
      <h2 style={{ margin: "0 5rem", color: "white" }}>
        Github API reached maximum requisitions, try again later :/
      </h2>
    );
  }

  return (
    <div className="projects">
      {projects &&
        projects.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              html_url={project.html_url}
              owner={project.owner}
              isForked={project.fork}
            />
          );
        })}
    </div>
  );
};
export default Projects;
