import { ProjectProps } from "../global"
// import { SButton } from "./styledComponents"

const Project = ({ project: { repoLink, description, demoLink, coverImage, name } }: ProjectProps) => {
  return (
    <div className="project">
      <div className="links">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
      <img src={coverImage} alt="thumbnail" className="thumbnail" />
      <div className="description">
        <h2>{name}</h2>
        <p>{description}</p>
        {/* <SButton>View Site</SButton> */}
      </div>
    </div>
  )
}

export default Project