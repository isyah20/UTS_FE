//import react from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const content = () => {
    return(
        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Soon</Card.Title>
              <Card.Text>
                Don't Give Up
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    );
}
export default content 