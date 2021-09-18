import React from 'react'
import { Button } from 'react-bootstrap'
import { FaFacebookF,FaRegArrowAltCircleRight, FaTwitter, FaYoutube } from "react-icons/fa";

import logo from 'assets/brand-football.svg';
import soccer from 'assets/soccer-ball-bg.jpg';

export default function BlogNews() {
  return (
    <>
      <div className="d-grid gap-2 mt-5">
        <Button className="btn-facebook border-0" size="lg">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FaFacebookF className="me-1"/> 
              <span className="fw-bold fs-6 ms-1 text-btn">108608 Likes</span>
            </div>
            <div>
              <FaRegArrowAltCircleRight style={{color: '#f0ffff47'}}/>
            </div>
          </div>
        </Button>
        <Button className="btn-twi border-0" size="lg">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FaTwitter className="me-1"/> 
              <span className="fw-bold fs-6 ms-1 text-btn">108608 Followers</span>
            </div>
            <div>
              <FaRegArrowAltCircleRight style={{color: '#f0ffff47'}}/>
            </div>
          </div>
        </Button>
        <Button className="btn-youtube border-0" size="lg">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FaYoutube className="me-1"/> 
              <span className="fw-bold fs-6 ms-1 text-btn">1802 Followers</span>
            </div>
            <div>
              <FaRegArrowAltCircleRight style={{color: '#f0ffff47'}}/>
            </div>
          </div>
        </Button>
        <div class="card-brand mt-4">
          <img src={soccer} alt="" className="img-bg"/>
          <div class="content p-4">
            <img src={logo} alt="" style={{width: '120px'}}/>
            <p className="fs-4 text-white mt-3">Fernando Santos's Portugal manifesto</p>
            <Button className="btn-main border-0 mt-3" size="lg">BUY IT NOW</Button>
          </div>
        </div>
      </div>
    </>
  )
}
