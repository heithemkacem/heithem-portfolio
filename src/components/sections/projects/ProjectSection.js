import { projects } from "../../../data/projectData";
import Projects from "./Projects";

const ProjectSection = () => {
  return (
    <>
      <Projects projectData={projects} title="My Projects" id="projects" />
    </>
  );
};

export default ProjectSection;
