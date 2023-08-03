import { Col } from "react-bootstrap";
interface IProjectCard {
  title: string;
  description: string;
  imgUrl: string;
  deployUrl?: string;
}
export const ProjectCard = ({ title, description, imgUrl, deployUrl }: IProjectCard) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={deployUrl || "#"} className="linkReset" target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
