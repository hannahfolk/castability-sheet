import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardComponent = (props) => {
  const {
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
        border: "none",
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      {photoAlignment === "right" ? (
        <Row>
          <Col xs={9}>
            <Card.Body>
              <Card.Title style={{ fontSize: "24px", textAlign: "center" }}>
                {name}, {ageRange}
              </Card.Title>
              <Card.Subtitle style={{ fontSize: "20px", textAlign: "center" }}>
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
              style={{ border: "2px solid gold", borderRadius: "20px" }}
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
              style={{ border: "2px solid gold", borderRadius: "20px" }}
            />
          </Col>
          <Col xs={9}>
            <Card.Body>
              <Card.Title style={{ fontSize: "24px", textAlign: "center" }}>
                {name}, {ageRange}
              </Card.Title>
              <Card.Subtitle style={{ fontSize: "20px", textAlign: "center" }}>
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
