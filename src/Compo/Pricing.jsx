import { Card, Col, Row, Container, Button } from "react-bootstrap";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <Container className="m-0 mx-auto d-flex align-items-center">
        <Row>
          {/* 1st */}
          <Col md={12}>
            <Card className="card-light">
              <Card.Body>
                <Card.Title className="join mb-4">Join our community</Card.Title>
                <Card.Subtitle className="text-yellow mb-3">30-day, hassle-free money back guarantee</Card.Subtitle>
                <Card.Text className="mb-4 text-main">
                  Gain access to our full library of tutorials along with expert code reviews. Perfect for any
                  developers who are serious about honing their skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 2nd */}
          <Col sm={12} md={6} className="pe-md-0">
            <Card className="card-dark">
              <Card.Body>
                <Card.Subtitle className="text-subs mb-3">Monthly Subscription</Card.Subtitle>
                <Card.Text className="mb-2 d-flex align-items-center gap-2">
                  <span className="price-tag display-4">$29</span> <span className="price-unit">per month</span>
                </Card.Text>
                <Card.Text className="mb-4">Full access for less than $1 a day</Card.Text>
                <div className="d-grid mb-4">
                  <Button variant="signup" size="lg">
                    Sign Up
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* 3rd */}
          <Col sm={12} md={6} className="ps-md-0">
            <Card className="card-accent">
              <Card.Body>
                <Card.Subtitle className="text-subs mb-3">Why Us</Card.Subtitle>
                <Card.Text className="mb-4 text-sp">
                  Tutorials by industry experts Peer &amp; expert code review Coding exercises Access to our GitHub
                  repos Community forum Flashcard decks New videos every week
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
