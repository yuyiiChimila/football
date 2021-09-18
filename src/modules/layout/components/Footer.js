import React from 'react'
import { Col, Row, Container, Figure } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaVk, FaInstagram, FaYoutube, FaVimeoV } from "react-icons/fa";

import soccer from 'assets/soccer-ball-bg.jpg';
import brand from 'assets/brand-football.svg';

export default function Footer() {
  return (
    <>
      <div class="section-footer footer text-white">
        <Row>
          <Col className="px-0 footer-menu">
            <Container className="py-5">
              <Row>
                <Col sm={6} md={3} lg={2} className="mt-5 mt-md-0">
                  <p className="fs-6 fw-bold">ABOUT US</p>
                  <ul>
                      <li><a href="#">Latest News</a></li>
                      <li><a href="#">Players Room</a></li>
                      <li><a href="#">Media Gallery</a></li>
                      <li><a href="#">Feedback</a></li>
                      <li><a href="#">Contact Us</a></li>
                  </ul>
                </Col>
                <Col sm={6} md={3} lg={2} className="mt-5 mt-md-0">
                  <p className="fs-6 fw-bold">INFORMATION</p>
                  <ul>
                      <li><a href="#">Olympics</a></li>
                      <li><a href="#">FIFA 2016</a></li>
                      <li><a href="#">NFL 2016</a></li>
                      <li><a href="#">NBA 2016</a></li>
                      <li><a href="#">Boxing</a></li>
                  </ul>
                </Col>
                <Col sm={6} md={3} lg={2} className="mt-5 mt-md-0">
                  <p className="fs-6 fw-bold">SUPPORT</p>
                  <ul>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Account</a></li>
                  </ul>
                </Col>
                <Col sm={6} md={3} lg={2} className="mt-5 mt-md-0">
                  <p className="fs-6 fw-bold">SUPPORT</p>
                  <ul>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Account</a></li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={{span: 4, offset: 8}} className="px-0 d-none d-lg-block">
            <div class="box-footer-right px-0">
              <img src={soccer} alt="" className="img"/>
              <Figure>
                <Figure.Image 
                width={100}
                height={100}
                src={brand}/>
              </Figure>
            </div>
          </Col>
        </Row>
        <Row style={{backgroundColor:'#35363f',height: '10vh'}}>
          <Col className="px-0 footer-menu">
            <Container className="pt-2">
              <Row>
                <Col className="pt-2 text-center text-lg-start">
                  <p className="mb-2">© All Rights Reserved 2017</p>
                </Col>
            </Row>
            </Container>
          </Col>
          <Col lg={{span: 4, offset: 8}} className="pt-2" style={{backgroundColor:'#fec722',zIndex: 2}}>
            <ul className="d-flex justify-content-center ps-0 pt-2">
              <p className="text-dark fw-bold me-2" >Follow Us:</p>
              <li className="me-3"><FaFacebookF className="icon"/></li>
              <li className="me-3"><FaTwitter className="icon"/></li>
              <li className="me-3"><FaVk className="icon"/></li>
              <li className="me-3"><FaInstagram className="icon"/></li>
              <li className="me-3"><FaYoutube className="icon"/></li>
              <li className="me-3"><FaVimeoV className="icon"/></li>
            </ul>
          </Col>
        </Row>
      </div>
   </>
  )
}
