import React from "react";
import axios from "axios";
import "../styles/Project.css";
import {
  Card,
  CardImg,
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
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/${projectID}`)
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
            src={require(`../assets/images/${this.props.match.params.projectID}.png`)}
            alt={this.state.project.title}
          />
          <CardBody>
            <CardTitle className="projectTitle">
              {this.state.project.title}
            </CardTitle>
            <CardSubtitle className="projectSubTitle">
              Tech Stack: [ {this.state.project.techstack} ]
            </CardSubtitle>
            <div
              className="projectDescription"
              dangerouslySetInnerHTML={{
                __html: this.state.project.detailed_description,
              }}
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.state.project.website_link}
            >
              <Button style={{ padding: "10px", marginTop: "20px" }} color="warning">
                View live site!
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProjectDetail;
