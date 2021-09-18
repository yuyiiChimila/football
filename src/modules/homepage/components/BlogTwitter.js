import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { FaTwitter, FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function BlogTweets() {
  return (
    <>
    <Container fluid style={{backgroundColor:'#282933'}} className="mt-5">
      <Container>
        <Row className="my-4 align-items-center">
          <Col sm={12} md={4}>
            <p className="fs-2 text-white fw-light mb-0"><FaTwitter className="me-2"/>Recent Tweets</p>
            <p className="fs-5 text-muted fw-bold">Find Us: @BBershadsky</p>
          </Col>
          <Col sm={10} md={7}>
            <p className="fs-5 text-muted fw-light">The 2016 UEFA European Championship, commonly referred to as UEFA Euro 2016 or simply Euro 2016, was the 15th UEFA European</p>
          </Col>
          <Col sm={2} md={1}>
            <div className="d-grid">
              <Button variant="outline-secondary" className="border-0 pm-0" size="sm">
                <FaAngleUp className="fs-3"/>
              </Button>
              <Button variant="outline-secondary" className="border-0 pt-0" size="sm">
                <FaAngleDown className="fs-3"/>
              </Button>
            </div>
          </Col>
        </Row> 
      </Container> 
    </Container>
    </>
  )
}
