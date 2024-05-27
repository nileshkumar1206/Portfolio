import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RestaurantPage from "../../Assets/Projects/RestaurantPage.png";
import BlogWebsite from "../../Assets/Projects/BlogWebsite.png";
import ToDoList from "../../Assets/Projects/ToDoList.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RestaurantPage}
              title="Responsive Restaurant Page"
              description="The Responsive Restaurant Page, built with HTML, CSS, and JavaScript, features an adaptive design for all devices, an interactive menu, and a reservation form. It highlights my skills in front-end development and responsive design."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlogWebsite}
              title="Blog Website"
              description="My personal blog page build with React.js and Tailwind Css which takes the content from makdown files and renders it using React.js. Supports dark mode and easy to write blogs using markdown."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoList}
              title="To Do List"
              description="A sleek, user-friendly to-do list website built with HTML, CSS, and JavaScript, featuring dynamic task management, intuitive UI, and seamless user interactions for efficient task organization."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
