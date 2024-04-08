import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/apatel544" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/ankur544/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/ankurpatel-1/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
