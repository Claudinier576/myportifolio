import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kenzieBurguerV2 from "../assets/img/kenzieBurguerv2.png";
import biblioteka from "../assets/img/BibliotekaKenzie.png";
import kimoveis from "../assets/img/Kimoveis.jpg";
import kenzieHub from "../assets/img/KenzieHub.png";
import controleDeProjetos from "../assets/img/controleDeProjetos.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import indevelopment from "../assets/img/Indevelopment.jpeg";
import nuKenzie from "../assets/img/NuKenzie.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Kenzie Burguer v2",
      description: "Development Front-end (React)",
      imgUrl: kenzieBurguerV2,
      deployUrl: "https://kenzie-burguer-v2-claudinier.vercel.app/"
    },
    {
      title: "Kenzie Hub",
      description: "Development Front-end (React)",
      imgUrl: kenzieHub,
      deployUrl: "https://react-entrega-kenzie-hub-claudinier.vercel.app/"
    },
    {
      title: "Controle de Projetos Kenzie M4",
      description: "Development Back-end",
      imgUrl: controleDeProjetos,
      deployUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/controle-de-projetos-kenzievelopers-sp3-m4-Claudinier"
    },
    {
      title: "BiblioteKa API",
      description: "API developed in Python for a library system",
      imgUrl: biblioteka,
      deployUrl: "https://biblioteka-g13-production.up.railway.app/api/docs/"
    },
    {
      title: "Kimoveis API",
      description: "Developed a movie rental API",
      imgUrl: kimoveis,
      deployUrl: "https://biblioteka-g13-production.up.railway.app/api/docs/"
    },
    {
      title: "NuKenzie",
      description: "Developed a movie rental API",
      imgUrl: nuKenzie,
      deployUrl: "https://nu-kenzie-gold-one.vercel.app/"
    },
    {
      title: "Manime",
      description: "Manime Rede Social para Geeks um projeto Full Stack que está sendo desenvolvido pela equipe Manimedev",
      imgUrl: indevelopment,
      deployUrl: "https://github.com/orgs/MANIMEDEV/repositories"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My Web projects in React, Node, Nest, Next, Typescript, and other technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Game Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
