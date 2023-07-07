import { Element } from "react-scroll";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Sample() {
  return (
    <Element name={"Sample"} id="sample">
      <Container>
        <Container className="d-flex">
          <Title>
            <h2>Sample</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Row className="mt-3 align-items-center">
          <Col className="d-flex flex-column text-center">
            <Container>
              <h3>Clothes and Expression Sample</h3>
            </Container>
          </Col>
        </Row>
        <Row className="mt-3 align-items-center">
          <Col className="d-flex flex-column ">
            <p>Hoodie Toggle</p>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/1U8TVedCryA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
          <Col className="d-flex flex-column ">
            <p>Simple Expression</p>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/MA7y3igL8rA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row className="mt-3 align-items-center">
          <Col className="d-flex flex-column ">
            <p>180 degree head movement</p>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/7N9L6V3WUpA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row className="mt-3 align-items-center">
          <Col className="d-flex flex-column text-center">
            <Container>
              <h3>Accesories Sample</h3>
            </Container>
          </Col>
        </Row>
        <Row className="mt-3 align-items-center">
          <Col className="d-flex flex-column ">
            <p>Simple Animated Smoke</p>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/4w66tr4ELBk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
          <Col className="d-flex flex-column ">
            <p>Animated Mask</p>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/uXW4HO4fkRI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row style={{paddingTop: '220px',}}></Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"Home"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-up" />
            </Link>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
