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
import { GenericProps } from "../App";
import traductionsJSON from "../assets/Traductions.json";

export const Projects = ({ language }: GenericProps) => {

  const projects = [
    {
      title: "Kenzie Burguer v2",
      description: {
        "en": "Developed in React with typescript a page for fast-food sales",
        "pt-br": "Desenvolvido em React  com typescript uma pagina para vendas de fast-foods"
      },
      imgUrl: kenzieBurguerV2,
      deployUrl: "https://kenzie-burguer-v2-claudinier.vercel.app/"
    },
    {
      title: "Kenzie Hub",
      description: {
        "en": "Developed in React with typescript a page for control of Technologies",
        "pt-br": "Desenvolvido em React  com typescript uma pagina para controle de Tecnologias"
      },
      imgUrl: kenzieHub,
      deployUrl: "https://react-entrega-kenzie-hub-claudinier.vercel.app/"
    },
    {
      title: "Controle de Projetos Kenzie M4",
      description: {
        "en": "Developed API for Project Control",
        "pt-br": "Desenvolvido API para controle de Projetos"
      },
      imgUrl: controleDeProjetos,
      deployUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/controle-de-projetos-kenzievelopers-sp3-m4-Claudinier"
    },
    {
      title: "BiblioteKa API",
      description: {
        "en": "API developed in Python for a library system",
        "pt-br": "API desenvolvida em Python para o sistema de uma biblioteca"
      },
      imgUrl: biblioteka,
      deployUrl: "https://biblioteka-g13-production.up.railway.app/api/docs/"
    },
    {
      title: "Kimoveis API",
      description: {
        "en": "Developed a movie rental API",
        "pt-br": "API desenvolvida para o sistema de uma Locadora"
      },
      imgUrl: kimoveis,
      deployUrl: "https://biblioteka-g13-production.up.railway.app/api/docs/"
    },
    {
      title: "NuKenzie",
      description: {
        "en": "API developed for expense control",
        "pt-br": "API desenvolvida para controle de gastos"
      },
      imgUrl: nuKenzie,
      deployUrl: "https://nu-kenzie-gold-one.vercel.app/"
    },
    {
      title: "Manime",
      description: {
        "en": "Manime Social Network for Geeks a Full Stack project being developed by the Manimedev team",
        "pt-br": "Manime Rede Social para Geeks um projeto Full Stack que está sendo desenvolvido pela equipe Manimedev"
      },
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
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{traductionsJSON.Projects[language]}</h2>
                  <p>{traductionsJSON.AboutProjects[language]}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">{traductionsJSON.WebDevelopment[language]}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">{traductionsJSON.GameDevelopment[language]}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                language={language}
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
