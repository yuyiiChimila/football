import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaPlayCircle } from "react-icons/fa";

import soccer from 'assets/soccer-ball-bg.jpg';

export default function BlogVideo() {
  return (
    <>
      <section className="title-vdio my-5">
        <div className="title-vdio my-5">
        <p className="fs-4 mb-0">HOT<span className="fw-bold ms-2">Videos</span></p>
        <div className="recent-navigation arrow-style pt-2">
            <FaAngleLeft/><FaAngleRight/>
        </div>
        </div>
      </section>
      <section className="vdio">
        <Row>
          <Col md={6} lg={3} className="mt-2">
            <div class="content-vdio">
            <img src={soccer} alt=""/>
            <div class="content">
              <div className="d-flex align-items-center">
              <FaPlayCircle className="text-white me-3 fs-1"/>
              <p className="fs-6 text-white mb-0">Preview: Tuesday's play-offs</p>
              </div>
            </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mt-2">
            <div class="content-vdio">
            <img src={soccer} alt=""/>
            <div class="content">
              <div className="d-flex align-items-center">
              <FaPlayCircle className="text-white me-3 fs-1"/>
              <p className="fs-6 text-white mb-0">Preview: Tuesday's play-offs</p>
              </div>
            </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mt-2 d-none d-md-block">
            <div class="content-vdio">
            <img src={soccer} alt=""/>
            <div class="content">
              <div className="d-flex align-items-center">
              <FaPlayCircle className="text-white me-3 fs-1"/>
              <p className="fs-6 text-white mb-0">Preview: Tuesday's play-offs</p>
              </div>
            </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mt-2 d-none d-md-block">
            <div class="content-vdio">
            <img src={soccer} alt=""/>
            <div class="content">
              <div className="d-flex align-items-center">
              <FaPlayCircle className="text-white me-3 fs-1"/>
              <p className="fs-6 text-white mb-0">Preview: Tuesday's play-offs</p>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}
