import { Element } from "react-scroll";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { portoImages, illustImages } from "../data";

export default function Pricing() {
  return (
    <Element name={"Pricing"} id="pricing">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Pricing</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            <Col className="d-flex flex-column text-center">
              <Container>
                <h3>Art + Live 2D Models</h3>
              </Container>
            </Col>
          </Row>
          <Row className="mt-3 align-items-center">
            {portoImages.map((data) => {
              return (
                <Col className="d-flex justify-content-center" key={data.id}>
                  <img
                    src={data.image}
                    alt={"Porto" + data.id}
                    loading="lazy"
                    className="mx-auto"
                    style={{ width: "50%" }}
                  />
                </Col>
              );
            })}
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Full-Body</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Starter Tier</h2>
                <h2>$350+</h2>
                <p>Perfect for starters</p>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>
                      Semi-complex clothes with minimal moving parts, for
                      example dress, school uniform.
                    </p>
                  </li>
                  <li>
                    <p>Up to 2 features like kemonomimi, tails.</p>
                  </li>
                  <li>
                    <p>
                      Up to 2 Accesories of your liking, (example: hats,
                      glasses, bags).
                    </p>
                  </li>
                  <li>
                    <p>
                      Up to 4 expressions (example: blushing, heart eyes,
                      crying, eye shining).
                    </p>
                  </li>
                  <li>
                    <p>
                      Standard physics (mainly on hair, breast and features).
                    </p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Complete Tier</h2>
                <h2>$500+</h2>
                <p>More details and better quality in rigging</p>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Bouncy and rigged with more Live 2D physics.</p>
                  </li>
                  <li>
                    <p>Optional 180 degree head movement.</p>
                  </li>
                  <li>
                    <p>Clothes has more moving parts.</p>
                  </li>
                  <li>
                    <p>Up to 4 features like kemonomimi, tails.</p>
                  </li>
                  <li>
                    <p>
                      Accesories with complex animation(example : flipping
                      books, smoking, animated wings).
                    </p>
                  </li>
                  <li>
                    <p>
                      Up to 6 expressions of your liking (example: blushing,
                      heart eyes, crying, eye shining).
                    </p>
                  </li>
                  <li>
                    <p>Free detailed reference sheet.</p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Half Body</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Budget Tier</h2>
                <h2>$220+</h2>
                <p>For who's on the budget</p>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Half body with semi complex clothes.</p>
                  </li>
                  <li>
                    <p>Features like kemonomimi, tails.</p>
                  </li>
                  <li>
                    <p>
                      Accesories of your liking, (example: hats, glasses, bags).
                    </p>
                  </li>
                  <li>
                    <p>
                      One expressions of your liking (example: blushing, heart
                      eyes, crying, eye shining).
                    </p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Lite Tier</h2>
                <h2>$150+</h2>
                <p>For who's looking for cheaper alternative</p>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Half body with less detailed coloring.</p>
                  </li>
                  <li>
                    <p>
                      One expressions of your liking (example: blushing, heart
                      eyes, crying, eye shining).
                    </p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Deformed (Chibi Style)</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Simple Deformed Tier</h2>
                <h2>$100+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Small chibi style body with detailed shading.</p>
                  </li>
                  <li>
                    <p>Features like kemonomimi, tails.</p>
                  </li>
                  <li>
                    <p>
                      Accesories of your liking, (example: hats, glasses, bags).
                    </p>
                  </li>
                  <li>
                    <p>
                      One expressions of your liking (example: blushing, heart
                      eyes, crying, eye shining).
                    </p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Budget Deformed Tier</h2>
                <h2>$70+</h2>

                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Small chibi style body with less detailed coloring.</p>
                  </li>
                  <li>
                    <p>
                      One expressions of your liking (example: blushing, heart
                      eyes, crying, eye shining).
                    </p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Gremlin Tier</h2>
                <h2>$50+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Flat coloring.</p>
                  </li>
                  <li>
                    <p>Simple eyes</p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Addons</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Expression - $5+</p>
                  </li>
                  <li>
                    <p>Clothes - $20+</p>
                  </li>
                  <li>
                    <p>Hairstyle - $10+</p>
                  </li>
                  <li>
                    <p>Accesories - $5+</p>
                  </li>
                  <li>
                    <p>Pets/Mascots - $30+</p>
                  </li>
                  <li>
                    <p>Reference sheet - $40+</p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <Row className="mt-3 align-items-center">
            <Col className="d-flex flex-column text-center">
              <Container>
                <h3>Illustration</h3>
              </Container>
            </Col>
          </Row>
          <Row className="mt-3 align-items-center">
            {illustImages.map((data) => {
              return (
                <Col className="d-flex justify-content-center" key={data.id}>
                  <img
                    src={data.image}
                    alt={"Porto" + data.id}
                    loading="lazy"
                    className="mx-auto"
                    style={{ width: "100%" }}
                  />
                </Col>
              );
            })}
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Single Character</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Simple Tier</h2>
                <h2>$50+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Single character.</p>
                  </li>
                  <li>
                    <p>Any poses you like.</p>
                  </li>
                  <li>
                    <p>Simple background (flat color or white).</p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Detailed Tier</h2>
                <h2>$70+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Single character.</p>
                  </li>
                  <li>
                    <p>Any poses you like.</p>
                  </li>
                  <li>
                    <p>Detailed background.</p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Deformed Tier</h2>
                <h2>$40+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Single character with deformed (chibi) style drawing.</p>
                  </li>
                  <li>
                    <p>Any poses you like.</p>
                  </li>
                  <li>
                    <p>Standard background.</p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Multiple Characters</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Simple Tier</h2>
                <h2>$80+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Multiple characters.</p>
                  </li>
                  <li>
                    <p>Any poses you like.</p>
                  </li>
                  <li>
                    <p>Simple background (flat color or white).</p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Detailed Tier</h2>
                <h2>$100+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Multiple characters.</p>
                  </li>
                  <li>
                    <p>Any poses you like.</p>
                  </li>
                  <li>
                    <p>Detailed background.</p>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col className="d-flex flex-column">
              <Container>
                <h2>Deformed Tier</h2>
                <h2>$60+</h2>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Multiple characters with deformed (chibi) style drawing.</p>
                  </li>
                  <li>
                    <p>Any poses you like.</p>
                  </li>
                  <li>
                    <p>Standard background.</p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>

          <Row className="mt-3 align-items-center">
            <Col className="d-flex flex-column text-center">
              <Container>
                <h3>Others</h3>
              </Container>
            </Col>
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Emotes</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Simple Emotes - $5+</p>
                  </li>
                  <li>
                    <p>Animated Emotes - $15+</p>
                  </li>
                 
                </ul>
              </Container>
            </Col>
          </Row>
          <Row
            className="mt-3"
            style={{ backgroundColor: "hsl(207, 95%, 8%)" }}
          >
            <h2>Twitch Panel</h2>
            <hr></hr>
            <Col className="d-flex flex-column">
              <Container>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Simple set (multiple panel, same design with different text) - $15+</p>
                  </li>
                  <li>
                    <p>Unique (each panel) - $20+</p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <Row className="mt-3 align-items-center">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>
                  Feel free to let me know if you want other stuff that is not
                  mentioned here.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Element>
  );
}
