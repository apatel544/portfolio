import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/apatel544" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/ankurpatel-1/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
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
    </footer >
  );
};

export default Footer;
