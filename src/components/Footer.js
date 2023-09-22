import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../components/MailchimpForm.js";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useState, useEffect, useRef, useContext } from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/andrey0109"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/andrey.harutyunyan.771"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/andharutyun1an/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}