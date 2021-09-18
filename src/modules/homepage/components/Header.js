import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaMale} from "react-icons/fa";

export default function Header() {
    return (
        <>
        <section className="section-header">
            <Container>
                <Row>
                    <Col md={8}>
                    <h1 className="fw-bold text-white fs-main">UEFA EURO 2016</h1>
                    <p className="text-white">The 2016 UEFA European Championship, commonly referred to as UEFA Euro 2016 or simply Euro 2016, was the 15th UEFA European Championship</p>
                    </Col>
                </Row>
                <Row className="match-time-section">
                    <Col lg={6}>
                        <div className="time-content">
                            <p className="ps-3 mb-1 pt-3 fw-normal"><span className="fw-bolder fs-5">Next Match</span> (Sunday, 10 July 2016)  </p>
                            <p className="ps-3 mb-1 fw-normal"><FaMapMarkerAlt className="me-1"/>Location: Stade de France, Saint-Denis</p>
                            <p className="ps-3 mb-1 fw-normal"><FaMale className="me-1"/>Referee: Mark Clattenburg (ENG)</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <ul className="d-flex justify-content-center justify-content-md-start ps-0 mb-0">
                            <li className="me-3">
                                <h1 className="text-white text-center mb-0 fs-main">36<span className="ps-3">:</span></h1>
                                <p className="text-white fw-bolder mb-0">Days</p>
                            </li>
                            <li className="me-3">
                                <h1 className="text-white text-center mb-0 fs-main">28<span className="ps-3">:</span></h1>
                                <p className="text-white fw-bolder mb-0">Hours</p>
                            </li>
                            <li className="me-3">
                                <h1 className="text-white text-center mb-0 fs-main">54<span className="ps-3">:</span></h1>
                                <p className="text-white fw-bolder mb-0">Minutes</p>
                            </li>
                            <li className="me-3">
                                <h1 className="text-white text-center mb-0 fs-main">06<span className="ps-3"></span></h1>
                                <p className="text-white fw-bolder mb-0">Seconds</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="bestplayer my-2">
                    <Col md={2} className="d-md-inline d-none">
                        <b className="text-white">06 Aug</b>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={4} className="my-2">
                                <Row className="border-start pt-3 pt-md-0">
                                    <Col md={9}>
                                        <b className="text-white-50">Vote for your Goal and Save of the Season</b>
                                    </Col>
                                    <Col md={3}>
                                        <b className="text-white">06 Aug</b>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} className="my-2 d-md-inline d-none">
                                <Row className="border-start pt-3 pt-md-0">
                                    <Col md={9} >
                                        <b className="text-white-50">Vote for your Goal and Save of the Season</b>
                                    </Col>
                                    <Col md={3}>
                                        <b className="text-white">06 Aug</b>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} className="my-2 d-md-inline d-none">
                                <Row className="border-start pt-3 pt-md-0">
                                    <Col>
                                        <b className="text-white-50">Vote for your Goal and Save of the Season</b>
                                    </Col>
                                    <Col md={3}>
                                        <b className="text-white">06 Aug</b>
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
