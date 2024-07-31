import { Col, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";
function TailLinkComponent() {

  const tileArr = [
    {
      id: 1,
      count: 4,
      title: 'Incident reported',
      url: '',
    }, {
      id: 1,
      count: 6,
      title: 'Check In',
      url: ''
    }, {
      id: 1,
      count: "03/05",
      title: 'Services open',
      url: ''
    }
  ]
  return (
    <Row>
      {tileArr.length ? tileArr.map(item => (

        <Col xs={4} md={4} >
          <Card>
            {/* <Card.Header as="h5">Featured</Card.Header> */}
            <Card.Body>
              <h3 style={{ color: "skyblue" }}>{item.count}</h3>
              <h5 style={{ color: 'black', fontWeight: "bold" }}>{item.title}</h5>
              <span style={{ position: "absolute", right: "10px", bottom: "10px" }}><FaArrowRight /></span>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      )) : ""}
    </Row>
  );
}


export default TailLinkComponent;