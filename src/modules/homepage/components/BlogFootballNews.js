import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import logo from 'assets/logo.png';
import soccer from 'assets/soccer-ball-bg.jpg';

export default function BlogFootballNews() {
  return (
    <>
    <section className="title my-5">
      <div className="foolball-new pb-3 blog-1 border-botton-news">
        <div className="widget-title">
          <p className="text-white fw-bolder pb-0 pt-2 ps-3">RECENT RESULT</p>
          <div className="recent-navigation arrow-style pt-2">
              <FaAngleLeft/><FaAngleRight/>
          </div>
        </div>
        <Row className="my-4">
          <p className="fs-5 fw-bolder text-center color-main mt-2 mb-0">06 Aug, 2016</p>
          <Row className="align-items-center">
            <Col xs={5} className="d-flex align-items-center justify-content-end">
              <p className="text-white fw-bolder mb-0 me-3">Portogal</p>
              <img src={logo} alt="" width={30}/>
            </Col>
            <Col>
              <p className="fs-5 text-white fw-light text-center mb-0">1-0</p>
            </Col>
            <Col xs={5} className="d-flex align-items-center justify-content-start">
              <img src={logo} alt="" width={30}/>
              <p className="text-white fw-bolder mb-0 ms-3">France</p>
            </Col>
          </Row>
        </Row>
        <Row className="my-4">
          <p className="fs-5 fw-bolder text-center color-main mt-2 mb-0">06 Aug, 2016</p>
          <Row className="align-items-center">
            <Col xs={5} className="d-flex align-items-center justify-content-end">
              <p className="text-white fw-bolder mb-0 me-3">Portogal</p>
              <img src={logo} alt="" width={30}/>
            </Col>
            <Col>
              <p className="fs-5 text-white fw-light text-center mb-0">1-0</p>
            </Col>
            <Col xs={5} className="d-flex align-items-center justify-content-start">
              <img src={logo} alt="" width={30}/>
              <p className="text-white fw-bolder mb-0 ms-3">France</p>
            </Col>
          </Row>
        </Row>
        <Row className="my-4">
          <p className="fs-5 fw-bolder text-center color-main mt-2 mb-0">06 Aug, 2016</p>
          <Row className="align-items-center">
            <Col xs={5} className="d-flex align-items-center justify-content-end">
              <p className="text-white fw-bolder mb-0 me-3">Portogal</p>
              <img src={logo} alt="" width={30}/>
            </Col>
            <Col>
              <p className="fs-5 text-white fw-light text-center mb-0">1-0</p>
            </Col>
            <Col xs={5} className="d-flex align-items-center justify-content-start">
              <img src={logo} alt="" width={30}/>
              <p className="text-white fw-bolder mb-0 ms-3">France</p>
            </Col>
          </Row>
        </Row>
        <Row className="my-4">
          <p className="fs-5 fw-bolder text-center color-main mt-2 mb-0">06 Aug, 2016</p>
          <Row className="align-items-center">
            <Col xs={5} className="d-flex align-items-center justify-content-end">
              <p className="text-white fw-bolder mb-0 me-3">Portogal</p>
              <img src={logo} alt="" width={30}/>
            </Col>
            <Col>
              <p className="fs-5 text-white fw-light text-center mb-0">1-0</p>
            </Col>
            <Col xs={5} className="d-flex align-items-center justify-content-start">
              <img src={logo} alt="" width={30}/>
              <p className="text-white fw-bolder mb-0 ms-3">France</p>
            </Col>
          </Row>
        </Row>
      </div>
      <div className="foolball-new pb-3 mt-5 blog-2 border-botton-news">
        <div className="widget-title">
          <p className="text-white fw-bolder pb-0 pt-2 ps-3">CLUB RANKING</p>
          <div className="recent-navigation arrow-style pt-2">
              <FaAngleLeft/><FaAngleRight/>
          </div>
        </div>
        <Row className="my-4">
          <Row>
            <Col xs={9} className="d-flex align-items-center mt-2">
              <p className="fs-5 mb-0 text-white mx-4">1</p>
              <img src={logo} alt="" width={30}/>
              <p className="fs-5 mb-0 text-white ms-4">Legacy</p>
            </Col>
            <Col>
              <p className="fs-5 mb-0 fw-bolder text-white text-end">86</p>
            </Col>
          </Row>
        </Row>
        <Row className="my-4">
          <Row>
            <Col xs={9} className="d-flex align-items-center mt-2">
              <p className="fs-5 mb-0 text-white mx-4">2</p>
              <img src={logo} alt="" width={30}/>
              <p className="fs-5 mb-0 text-white ms-4">Teamfoot</p>
            </Col>
            <Col>
              <p className="fs-5 mb-0 fw-bolder text-white text-end">86</p>
            </Col>
          </Row>
        </Row>
        <Row className="my-4">
          <Row>
            <Col xs={9} className="d-flex align-items-center mt-2">
              <p className="fs-5 mb-0 text-white mx-4">3</p>
              <img src={logo} alt="" width={30}/>
              <p className="fs-5 mb-0 text-white ms-4">Real M.</p>
            </Col>
            <Col>
              <p className="fs-5 mb-0 fw-bolder text-white text-end">86</p>
            </Col>
          </Row>
        </Row>
        <Row className="my-4">
          <Row>
            <Col xs={9} className="d-flex align-items-center mt-2">
              <p className="fs-5 mb-0 text-white mx-4">4</p>
              <img src={logo} alt="" width={30}/>
              <p className="fs-5 mb-0 text-white ms-4">Foolianto</p>
            </Col>
            <Col>
              <p className="fs-5 mb-0 fw-bolder text-white text-end">86</p>
            </Col>
          </Row>
         </Row>
      </div>
      <div className="foolball-new timelint pb-4 mt-5 blog-3 border-botton-news">
        <div className="widget-title">
            <p className="text-white fw-bolder pb-0 pt-2 ps-3">TODAY ON SPORTSOX</p>
        </div>
        <Row className="p-4">
          <img src={soccer} alt=""/>
          <p className="fs-5 mb-0 text-white fw-bolder my-4">Best Player in Europe final three: Cristiano Ronaldo</p>
        </Row>
        <Row className="my-4">
          <Col>
            <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
              <div className="vertical-timeline-item vertical-timeline-element">
                <div className="vertical-timeline-element-content bounce-in">
                    <p className="text-secondary">Sweden and Germany in last four</p> 
                    <span className="text-secondary vertical-timeline-element-date">9:30 AM</span>
                </div>
              </div>
              <div className="vertical-timeline-item vertical-timeline-element">
                <div className="vertical-timeline-element-content bounce-in">
                    <p className="text-white">Best Player in Europe final three: Cristiano Ronaldo</p> 
                    <span className="text-white vertical-timeline-element-date">12:25 PM</span>
                </div>
              </div>
              <div className="vertical-timeline-item vertical-timeline-element">
                <div className="vertical-timeline-element-content bounce-in">
                    <p className="text-secondary">Best Player in Europe final three: Cristiano Ronaldo</p> 
                    <span className="text-secondary vertical-timeline-element-date">12:25 PM</span>
                </div>
              </div>
              <div className="vertical-timeline-item vertical-timeline-element">
                <div className="vertical-timeline-element-content bounce-in">
                    <p className="text-secondary">Best Player in Europe final three: Cristiano Ronaldo</p> 
                    <span className="text-secondary vertical-timeline-element-date">12:25 PM</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
    </>
  )
}
