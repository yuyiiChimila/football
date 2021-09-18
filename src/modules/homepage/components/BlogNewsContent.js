import React from 'react'
import { Col, Row, Figure, Button } from 'react-bootstrap'
import { FaRegClock, FaRegComment } from "react-icons/fa";

import soccer from 'assets/soccer-ball-bg.jpg';

export default function BlogNewsContent() {
  return (
    <>
      <section className="title-news my-5">
        <div style={{borderBottom: '2px solid #fec722',position: 'relative'}}>
          <Row className="p-0">
            <Col sm={3} >
              <p className="fs-4 mb-0">Latest<span className="fw-bold ms-2">News</span></p>
            </Col>
            <Col sm={9} className="text-md-end">
              <Button variant="light" className="mx-1 mb-1" size="sm" active>All</Button>
              <Button variant="light" className="mx-1 mb-1" size="sm">The Team</Button>
              <Button variant="light" className="mx-1 mb-1" size="sm">Uefa 2016</Button>
              <Button variant="light" className="ms-1 mb-1" size="sm">UEFA 2017</Button>
            </Col>
          </Row>
        </div>
      </section>
      <section className="content-news my-5">
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
        <Row className="my-4 list-news">
          <Col md={6} className="ps-md-0 pe-md-2 px-0 mt-3">
            <Row> 
              <Col xs={4}>
              <Figure>
                <Figure.Image src={soccer}/>
              </Figure>
              </Col>
              <Col xs={8} className="p-0">
                <p className="year mb-3">Euro 2016</p>
                <p className="fw-bold mb-2"><small>Lukas Podolski retires from Germany duty</small></p>
                <p className="fw-bold mb-0"><small><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16</small></p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="pe-md-0 ps-md-2 px-0 mt-3">
            <Row> 
              <Col xs={4}>
              <Figure>
                <Figure.Image src={soccer}/>
              </Figure>
              </Col>
              <Col xs={8} className="p-0">
                <p className="year mb-3">Euro 2016</p>
                <p className="fw-bold mb-2"><small>Lukas Podolski retires from Germany duty</small></p>
                <p className="fw-bold mb-0"><small><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16</small></p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="ps-md-0 pe-md-2 px-0 mt-3">
            <Row> 
              <Col xs={4}>
              <Figure>
                <Figure.Image src={soccer}/>
              </Figure>
              </Col>
              <Col xs={8} className="p-0">
                <p className="year mb-3">Euro 2016</p>
                <p className="fw-bold mb-2"><small>Lukas Podolski retires from Germany duty</small></p>
                <p className="fw-bold mb-0"><small><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16</small></p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="pe-md-0 ps-md-2 px-0 mt-3">
            <Row> 
              <Col xs={4}>
              <Figure>
                <Figure.Image src={soccer}/>
              </Figure>
              </Col>
              <Col xs={8} className="p-0">
                <p className="year mb-3">Euro 2016</p>
                <p className="fw-bold mb-2"><small>Lukas Podolski retires from Germany duty</small></p>
                <p className="fw-bold mb-0"><small><FaRegClock className="me-2"/>12 Aug, 2016 - 22:15<FaRegComment className="ms-3 me-2"/>16</small></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}
