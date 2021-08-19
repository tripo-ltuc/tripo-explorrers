import React from "react";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const FooterPage = () => {
  return (
    <section className="footer-side">
    <section bg="dark" variant="dark" className="font-small pt-4 footer-home">
        <Container>
      <Row className="text-center">
        <Col className="title-footer" >
          <h5 className="title">Footer Content</h5>
          <p>
            Don't forget to follow us on our socail media
          </p>
        </Col>
        <Col className="txt-social">
        <div class="col align-self-right">
          <a href="https://www.youtube.com/"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com/" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        </Col>
      </Row>
      </Container>
      <div style={{ borderTop: "2px solid #FFD3B6 ", marginLeft: 30, marginRight: 30 }}>
      </div>
      <Container>
      <Row className="text-center">
        <Col><div className="footer-copyright text-center py-3">
          2021 &copy; Copyright: Exporters
          {/* <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
        </div></Col>
      </Row>
      </Container>
    </section></section>
  );
}

export default FooterPage;