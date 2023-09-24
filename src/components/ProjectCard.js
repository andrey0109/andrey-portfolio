import { Col } from "react-bootstrap";
import { useState, useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom/client";

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={15} md={8}>
      <div className="proj-imgbx">
      <a href= {siteUrl}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}

export default ProjectCard;