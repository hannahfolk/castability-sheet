import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSnowboarding,
  faComputer,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

fontawesome.library.add(faPersonSnowboarding, faComputer, faBriefcase);

const CardComponent = (props) => {
  const {
    icon,
    name,
    ageRange,
    adjectives,
    description,
    actor,
    show,
    photoAlignment,
    image,
  } = props;

  return (
    <Card
      style={{
        width: "100%",
        border: "2px solid gold",
        borderRadius: "20px",
        backgroundColor: "transparent",
        color: "white",
        marginTop: 20,
        marginBottom: 20,
        padding: "10px 30px",
      }}
    >
      {photoAlignment === "right" ? (
        <Row>
          <Col xs={9}>
            <Card.Body>
              <Card.Title style={{ fontSize: "24px", textAlign: "center" }}>
                <FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />
                {name}, {ageRange}
              </Card.Title>
              <Card.Subtitle style={{ fontSize: "18px", textAlign: "center" }}>
                {adjectives.join(", ")}
              </Card.Subtitle>
              <Card.Text style={{ marginBottom: 0, fontSize: "12px" }}>
                {description}
              </Card.Text>
              <Card.Text style={{ textAlign: "center", fontSize: "12px" }}>
                Think <strong>{actor}</strong> in <em>{show}</em>.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card.Img
              src={image}
              style={{
                border: "2px solid gold",
                borderRadius: "20px",
                filter: "drop-shadow(2px 2px 4px #080816)",
              }}
            />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card.Img
              src={image}
              style={{
                border: "2px solid gold",
                borderRadius: "20px",
                filter: "drop-shadow(2px 2px 4px #080816)",
              }}
            />
          </Col>
          <Col xs={9}>
            <Card.Body>
              <Card.Title style={{ fontSize: "24px", textAlign: "center" }}>
                <FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />
                {name}, {ageRange}
              </Card.Title>
              <Card.Subtitle style={{ fontSize: "18px", textAlign: "center" }}>
                {adjectives.join(", ")}
              </Card.Subtitle>
              <Card.Text style={{ marginBottom: 0, fontSize: "12px" }}>
                {description}
              </Card.Text>
              <Card.Text style={{ textAlign: "center", fontSize: "12px" }}>
                Think <strong>{actor}</strong> in <em>{show}</em>.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      )}
    </Card>
  );
};

export default CardComponent;
