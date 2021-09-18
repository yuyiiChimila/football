import React from 'react'
import { Container, Row, Col, Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaVk, FaInstagram, FaYoutube, FaVimeoV, FaLock, FaShoppingBasket } from "react-icons/fa";

import logo from 'assets/logo.png';

export default function Header() {
  return (
    <>
      <section className="nav-top">
        <Container>
          <Row>
          <Col md={6}>
          <ul className="d-flex justify-content-center justify-content-md-start ps-0">
            <li className="me-3"><FaFacebookF className="text-secondary"/></li>
            <li className="me-3"><FaTwitter className="text-secondary"/></li>
            <li className="me-3"><FaVk className="text-secondary"/></li>
            <li className="me-3"><FaInstagram className="text-secondary"/></li>
            <li className="me-3"><FaYoutube className="text-secondary"/></li>
            <li className="me-3"><FaVimeoV className="text-secondary"/></li>
            <li className="me-3"><a href="#" className="text-white px-3 border-start text-decoration-none">Contact</a></li>
            <li className="me-3"><a href="#" className="text-white ps-3 border-start text-decoration-none">Donation</a></li>
          </ul>
          </Col>
          <Col  md={6}>
          <ul className="d-flex justify-content-center justify-content-md-end ps-0">
            <li className="me-2"><span className="me-0 text-white">Currency:</span><a href="#" className="ms-0 color-main ps-1 pe-2 border-end text-decoration-none">USD</a></li>
            <li className="me-2"><span className="me-0 text-white">Wishlist:</span><a href="#" className="ms-0 color-main ps-1 pe-2 border-end text-decoration-none">12</a></li>
            <li className="me-2">
                <a href="#" className="ms-0 color-main ps-1 text-decoration-none"><FaLock className="me-1 mb-1"/>Sign Up</a>
                <span className="me-0 text-white px-1">or</span>
                <a href="#" className="ms-0 color-main ps-1 text-decoration-none">Login</a>
            </li>
          </ul>
          </Col>
          </Row>
        </Container>
      </section>
      <section className="nav-medium">
        <Navbar collapseOnSelect expand="md" bg="light">
        <Container>
        <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold text-dark">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-dark">Features</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-dark">About</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-dark">Shop Blog</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-dark">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center"> 
            <div className="ms-0 ms-md-3">
              <Button variant="outline-secondary"><FaShoppingBasket className="text-dark"/></Button>
            </div>
            <div className="ms-3">
              <p className="fw-bold mb-0">Your Cart (3)</p>
              <p className="fw-bold mb-0 color-main">$1200.00</p>
            </div>
          </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </section>
      <section className="nav-button border-top">
          <Navbar collapseOnSelect expand="lg" bg="light" className="p-md-0 p-2">
            <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="flex-grow-0"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#" className="fw-bold text-dark b-start">Liga BBVA</Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark b-start">UEFA</Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark b-start">EPL</Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark b-start">Super Cup</Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark b-start">World Cup</Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark b-start">NPL</Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark b-start">Nation League</Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark b-start">Archive</Nav.Link>
              </Nav>
              <Form className="d-inline">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 border-0"
                aria-label="Search"
              />
              </Form>
            </Navbar.Collapse>
            </Container>
          </Navbar>
      </section>
    </>
  )
}
