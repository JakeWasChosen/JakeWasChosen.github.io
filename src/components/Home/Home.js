import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
const TextChanger = () => {
  const [text, setText] = useState('Jason');

  const handleMouseEnter = () => {
    setText('Jason \'JSON\'');
  }

  const handleMouseLeave = () => {
    setText('Jason');
  }
  const animationPlayState = text === 'Jason \'JSON\'' ? 'paused' : 'initial';

  return (
    <span style={{animationPlayState: animationPlayState}} className="json" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {text}
    </span>

  );
}
function Home()
{
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm&nbsp;
                <strong className="main-name"><span className="brackets">&#123;</span><TextChanger/> Cameron< span className="brackets">&#125;</span></strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;