import React from 'react'
import { Row, Col, InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import { FaThumbsUp, FaTwitter } from "react-icons/fa";

export default function BlogNewsSocial() {
  return (
    <>
      <Row className="my-5">
        <Col md={6} className="box-sign-up">
          <Row className="d-flex align-items-center">
            <Col md={8} className="pe-3">
              <p className="fs-3">Sign Up <span className="fw-bold">for the Newsletter</span></p>
              <p>Vivamus quis mi. Phasellus a est. Phasellus magna. In hac abitasse platea dictumst. Curabitur at lacus.</p>
            </Col>
            <Col md={4}>
              <InputGroup className="mb-3">
                <FormControl
                placeholder="Your E-mail"
                />
                <Button variant="dark">
                Button
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="box-facebook">
          <p className="fs-3 text-white">Join to <span className="fw-bold">our Facebook</span></p>
          <Card body className="border border-light p-0" style={{background: '#80a1d259'}}>
            <p className="text-white mb-0"> 
            <Button variant="light" size="sm" className="me-2" style={{color:'#4366af'}}>
            <FaThumbsUp className="me-2 mb-1" style={{color:'#4366af'}}/>Like
            </Button>
            <small>4.5K people like this.</small>
            </p>
          </Card>
        </Col>
        <Col md={3} className="box-twitter">
          <p className="fs-3 text-white">Join to <span className="fw-bold">our Twitter</span></p>
          <Card body className="border border-light p-0" style={{background: '#80a1d259'}}>
            <p className="text-white mb-0"> 
            <Button variant="light" size="sm" className="me-2" style={{color:'#0a96d0'}}>
            <FaTwitter className="me-2 mb-1" style={{color:'#0a96d0'}}/>Twitter
            </Button>
            <small>4.5K people like this.</small>
            </p>
          </Card>
        </Col>
      </Row>
    </>
  )
}
