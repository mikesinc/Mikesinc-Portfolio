import React from "react";
import "../styles/Project.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  Container,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  return (
    <Container className="projectCards" fluid>
      {data.map((project, key) => {
        return (
          <Card
            key={project.id}
            className="projectCard"
            style={{ borderWidth: "1px", borderColor: "grey" }}
          >
            <CardImg top width="100%" src={require(`../assets/images/${project.id}.png`)} alt={project.title} />
            <CardBody>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CardTitle className="projectTitle">{project.title}</CardTitle>
                <Link to={`/${project.id}`}>
                  <Button
                    className="readButton"
                    style={{ width: "100%" }}
                    color="warning"
                  >
                    Read more
                  </Button>
                </Link>
              </div>
              <CardSubtitle className="projectSubTitle">
                [ {project.techstack} ]
              </CardSubtitle>
              <div
                className="projectDescription"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </CardBody>
          </Card>
        );
      })}
    </Container>
  );
};

export default Projects;
