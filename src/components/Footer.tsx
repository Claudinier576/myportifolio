import { Container, Row, Col } from "react-bootstrap";

import LogoCN from '../assets/img/LogoCN.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { GenericProps } from "../App";
import traductionsJSON from "../assets/Traductions.json";
export const Footer = ({ language }: GenericProps) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={LogoCN} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/claudinierjcneto" target="_blank" ><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/_c_neto" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. {traductionsJSON.AllRightsReserved[language]}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
