import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { FaAngleRight, FaRegComment, FaRegClock, FaAngleLeft, FaMale } from "react-icons/fa";

import soccer from 'assets/soccer-ball-bg.jpg';

export default function BlogFootballContent() {
  return (
    <>
      <section className="title my-5">
        <div className="title-section">
          <Row>
            <Col>
              <p className="fs-4 mb-0">Football<span className="fw-bold ms-2">Feed</span></p>
            </Col>
            <Col className="text-end me-3">
              <a href="#" className="text-dark text-decoration-none" style={{borderBottom: '1px solid #000'}}>Read More</a><span className="ms-1"><FaAngleRight/></span>
            </Col>
          </Row>
        </div>
      </section>
      <section className="content">
        <Row>
          <div class="card-new">
            <p className="year">Euro 2016</p>
            <img src={soccer} alt=""/>
            <div class="content">
              <p className="fs-4 fw-bold text-white">Fernando Santos's Portugal manifesto</p>
              <p className="fw-bold text-white"><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16 </p>
            </div>
          </div>
        </Row>
        <Row className="my-4">
          <Col md={6} className="ps-md-0 pe-md-2 px-0">
            <div class="card-new-6">
              <p className="year">Euro 2016</p>
              <img src={soccer} alt=""/>
              <div class="content">
                <p className="fs-4 fw-bold text-white">Fernando Santos's Portugal manifesto</p>
                <p className="fw-bold text-white"><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16 </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="pe-md-0 ps-md-2 px-0 my-4 my-md-0">
            <div class="card-new-6">
              <p className="year">Euro 2016</p>
              <img src={soccer} alt=""/>
              <div class="content">
                <p className="fs-4 fw-bold text-white">Fernando Santos's Portugal manifesto</p>
                <p className="fw-bold text-white"><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16 </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={6} className="ps-md-0 pe-md-2 px-0">
            <div class="card-new-6">
              <p className="year">Euro 2016</p>
              <img src={soccer} alt=""/>
              <div class="content">
                <p className="fs-4 fw-bold text-white">Fernando Santos's Portugal manifesto</p>
                <p className="fw-bold text-white"><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16 </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="pe-md-0 ps-md-2 px-0 my-4 my-md-0">
            <div class="card-new-6">
              <p className="year">Euro 2016</p>
              <img src={soccer} alt=""/>
              <div class="content">
                <p className="fs-4 fw-bold text-white">Fernando Santos's Portugal manifesto</p>
                <p className="fw-bold text-white"><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16 </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="titler my-2">
        <Row>
          <Col md={6} className="ps-md-0 pe-md-2 px-0">
            <div className="title-section">
              <Row>
                <Col xs={6}>
                  <p className="fs-4 mb-0">Top<span className="fw-bold ms-2">Player</span></p>
                </Col>
                <Col className="text-end me-3">
                  <FaAngleRight className="text-dark"/>
                </Col>
              </Row>
            </div>
            <div class="box-player mt-3">
              <img src={soccer} alt=""/>
              <div class="content">
                <p className="fs-4 fw-bold text-white mb-0">David Beckham</p>
                <p className="fw-bold text-white mb-0"><FaMale className="me-2"/>Halfback </p>
              </div>
              <div className="recent-navigation arrow-style pt-2">
                <FaAngleLeft/><FaAngleRight/>
              </div>
            </div>
          </Col>
          <Col md={6} className="pe-md-0 ps-md-2 px-0 my-4 my-md-0">
            <div className="title-section">
              <Row className="mt-4 mt-md-0">
                <Col xs={6} className="pe-md-0 ps-md-2 px-0">
                  <p className="fs-4 mb-0 ps-2">Our<span className="fw-bold ms-2">Polls</span></p>
                </Col>
                <Col className="text-end me-3">
                  <FaAngleRight className="text-dark"/>
                </Col>
              </Row>
            </div>
            <div class="box-polls px-0 mt-3">
              <img src={soccer} alt=""/>
              <div class="content">
                <p className="fs-5 fw-bold">Are Fernando Santos's Best Footballer in the team?</p>
                <Form.Check 
                type='radio'
                label="Some Poll Option"
                className='ps-0 my-2'
                name="group1"
                />
                <Form.Check 
                type='radio'
                label="Some Poll Option"
                className='ps-0 my-2'
                name="group1"
                />
                <Form.Check 
                type='radio'
                label="Some Poll Option"
                className='ps-0 my-2'
                name="group1"
                />
                <Form.Check 
                type='radio'
                label="Some Poll Option"
                className='ps-0 my-2'
                name="group1"
                />
                <Button variant="dark" className="mt-3">Submit My Answer</Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}
