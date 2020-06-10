import React from "react";
import axios from "axios";
import "../styles/Project.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Jumbotron,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

class ProjectDetail extends React.Component {
  state = {
    project: {},
  };

  componentDidMount() {
    const projectID = this.props.match.params.projectID;
    // axios.get(`http://127.0.0.1:8000/api/${projectID}`).then((res) => {
    axios
      .get(`https://mikesinc-portfolio.herokuapp.com/api/${projectID}`)
      .then((res) => {
        this.setState({
          project: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Jumbotron className="JumboDetail" fluid>
          <Container fluid>
            <h1 className="display-2">MikeSinc | Portfolio</h1>
            <p className="lead">
              Welcome to my collection of web development work.
            </p>
          </Container>
        </Jumbotron>

        <div>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/" style={{ color: "black" }}>
              Portfolio
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              {this.state.project.title}
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Card className="detailCard" outline color="white">
          <CardImg
            className="detailImg"
            src={this.state.project.image}
            alt={this.state.project.title}
          />
          <CardBody>
            <CardTitle
              className="projectTitle"
              style={{ paddingRight: "50px" }}
            >
              {this.state.project.title}
            </CardTitle>
            <CardSubtitle className="projectSubTitle">
              Tech Stack: [ {this.state.project.techstack} ]
            </CardSubtitle>
            <CardText className="projectDescription">
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.project.detailed_description,
                }}
              />
            </CardText>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.state.project.website_link}
            >
              <Button>View live site!</Button>
            </a>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProjectDetail;
