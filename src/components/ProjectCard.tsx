import { Col } from "react-bootstrap";
interface IProjectCard {
  title: string;
  description: {
    "pt-br": string,
    "en": string
  };
  imgUrl: string;
  deployUrl?: string;
  language: "pt-br" | "en";
}
export const ProjectCard = ({ title, description, imgUrl, deployUrl,language }: IProjectCard) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={deployUrl || "#"} className="linkReset" target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description[language]}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
