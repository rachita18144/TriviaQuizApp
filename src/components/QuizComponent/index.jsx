import React from 'react'
import './index.scss';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'

class QuizComponent extends React.Component {
    constructor() {
        super();
      }

render() {
return <div>
  <Container>
    <h1 className="text-white extra-margin">Trivia Quiz App!</h1>
  </Container>
  <Container>
    <Row>
      <Col md={4}>
      <Card style={{ width: '18rem' }} bg="light" text="white">
        <Card.Img variant="top"
          src="https://media.fromthegrapevine.com/assets/images/2018/4/the-office-u.S..jpg.824x0_q71_crop-scale.jpg" />
        <Card.Body>
          <Card.Title bg="primary" text="white">The Office</Card.Title>
          <Card.Text bg="primary" text="white">
            "I saved a life. My own. Am I hero?... I really can't say, but yes!" - Michael Scott
          </Card.Text>
          <Button variant="info" block>Start</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card style={{ width: '18rem' }} bg="light" text="white">
        <Card.Img variant="top"
          src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2018/12/cast01-h_2018.jpg" />
        <Card.Body>
          <Card.Title bg="primary" text="white">F.R.I.E.N.D.S</Card.Title>
          <Card.Text bg="primary" text="white">
            "Unagi is a state of total awareness. Only by achieving true Unagi can you be prepared for any danger that
            may befall you." - Ross
          </Card.Text>
          <Button variant="info" block>Start</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card style={{ width: '18rem' }} bg="light" text="white">
        <Card.Img variant="top"
          src="https://api.time.com/wp-content/uploads/2020/04/GettyImages-464382604.jpg?w=800&quality=85" />
        <Card.Body>
          <Card.Title bg="primary" text="white">Parks and Recreation</Card.Title>
          <Card.Text bg="primary" text="white">
            "Leslie, I typed your symptoms into the thing up here, and it says you could have network connectivity
            problems." - Andy Dwyer
          </Card.Text>
          <Button variant="info" block>Start</Button>
        </Card.Body>
      </Card>
      </Col>
    </Row>
  </Container>
</div>;
  }
}

export default QuizComponent