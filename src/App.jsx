import { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "./components/Card/Card";
import Image from "react-bootstrap/Image";

import data from "./data.json";
import "./App.css";

const App = () => {
  const ref = useRef();

  const generatePDF = () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        style={{ marginTop: "20px", marginBottom: "20px" }}
        onClick={generatePDF}
      >
        Save as a PDF
      </Button>
      <TransformWrapper initialScale={1} ref={ref}>
        <TransformComponent>
          <main
            id="pdf"
            ref={ref}
            style={{
              position: "relative",
              width: "612px",
              cursor: "pointer",
            }}
          >
            <Image
              src="./assets/background.jpg"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
            <Container style={{ padding: "20px" }}>
              <h4
                style={{
                  textAlign: "center",
                  color: "white",
                  position: "relative",
                }}
              >
                The Many Faces of
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    color: "white",
                    position: "relative",
                    fontFamily: "'Tilt Prism', cursive",
                    marginBottom: "0.5rem",
                  }}
                >
                  Hannah Folk
                </p>
              </h4>
              {data.map((breakdown) => (
                <Card key={breakdown.name} {...breakdown} />
              ))}
            </Container>
          </main>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default App;
