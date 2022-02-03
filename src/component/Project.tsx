import { ProjectProps } from "../global"
import TechStacks from "./TechStacks";
import TechStack from "./TechStack";

const Project = ({ project: { repoLink, description, demoLink, coverImage, name, techStacks } }: ProjectProps) => {
  return (
    <div className="project">
      <div className="links">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
      <img src={coverImage} alt="thumbnail" className="thumbnail" loading="lazy" />
      <div className="description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <TechStacks>
        {techStacks.map((stack, i) => <TechStack key={i} stack={stack} />)}
      </TechStacks>
    </div>
  )
}

export default Project