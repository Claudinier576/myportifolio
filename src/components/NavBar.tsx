import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import LogoCN from '../assets/img/LogoCN.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { GenericProps } from "../App";
import traductionsJSON from "../assets/Traductions.json";


export const NavBar = ({ language, setLanguage }: GenericProps) => {

  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={LogoCN} alt="Logo" className="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{traductionsJSON.Home[language]}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{traductionsJSON.Skills[language]}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{traductionsJSON.Projects[language]}</Nav.Link>
            </Nav>
            <NavDropdown title={traductionsJSON.ChoiseLanguage[language]}>
              <NavDropdown.Item onClick={() => {
                setLanguage!("pt-br");
              }}>
                PT-BR
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                setLanguage!("en");
              }}>
                EN
              </NavDropdown.Item>
            </NavDropdown>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/claudinierjcneto" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/_c_neto" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>{traductionsJSON.LetsConnect[language]}</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
