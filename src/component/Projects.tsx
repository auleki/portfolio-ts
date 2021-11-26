import { useState, useEffect } from "react";
import { listOfProjects } from "../dataBank"
import Project from "./Project"

import { ProjectType } from "../global";

const Projects = () => {
  const [projectsList, setProjectsList] = useState<ProjectType[]>([])

  useEffect(() => setProjectsList(listOfProjects), [])

  return (
    <div className="projects">
      {projectsList.map((project, i) => <Project key={i} project={project} />)}
    </div>
  )
}

export default Projects