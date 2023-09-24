import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom/client";

export const Projects = () => {

  const projects = [
    {
      title: "Ecomerce Tus Zapas",
      description: "Design & Development",
      imgUrl: projImg1,
      siteUrl: "https://andrey0109.github.io/tuszapas/"
    },
    {
      title: "ANDREY Digital Solutions",
      description: "Design & Development",
      imgUrl: projImg2,
      siteUrl: "https://andrey0109.github.io/miproyecto/?fbclid=IwAR0agJQGIp0XXrM4wZCJYOq9cVVeNTwFzq5PHi0M-Q9mTaZNtirLi7Z9Wl8"

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={20}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Aquí estan unos de mis proyectos. La lista se actualizará y se agregarán mis nuevos proyectos.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Imágenes</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">Información</Nav.Link>
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
                    <Tab.Pane eventKey="third">
                      <p>Ecomerce "Tus Zapas" - es un proyecto de una tienda de zapas deportivas kde los mejores marcas (Nike, Adidas, etc.) Esta creado con HTML,CSS y JavaScript.</p>
                      <p>"ANDREY Digital Solutions" - es un proyecto, donde yo ofrezco mis servicios de creación y diseño de la páginas web.</p>
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