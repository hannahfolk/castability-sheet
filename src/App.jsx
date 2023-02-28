import { useRef } from "react";
import JsPDF from "jspdf";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "./components/Card/Card";
import Image from "react-bootstrap/Image";

import data from "./data.json";
import "./App.css";

const App = () => {
  const ref = useRef();

  const generatePDF = () => {
    const pdf = new JsPDF("portrait", "pt", "letter");
    pdf.html(document.querySelector("#pdf")).then(() => {
      pdf.save("HannahFolk_CastabilitySheet.pdf");
    });
  };

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
              height: "791px",
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
            <Container style={{ padding: "30px" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "36px",
                  color: "white",
                  position: "relative",
                }}
              >
                Hannah Folk
              </h1>
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
