import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './Header'
import BlogFootballContent from './BlogFootballContent'
import BlogFootballNews from './BlogFootballNews'
import BlogNewsSocial from './BlogNewsSocial'
import BlogNewsContent from './BlogNewsContent'
import BlogNews from './BlogNews'
import BlogVideo from './BlogVideo'
import BlogTweets from './BlogTwitter'

export default function HomePageContent() {
  return (
    <>
      <Header></Header>
      <section className="Blog Football">
        <Container>
          <Row>
            <Col xl={8} className="pe-xl-4 pe-0">
              <BlogFootballContent></BlogFootballContent>
            </Col>
            <Col xl={4} className="ps-xl-4 ps-0 pe-0">
              <BlogFootballNews></BlogFootballNews>
            </Col>
          </Row>
        </Container>
          <Row>
            <Col>
              <BlogNewsSocial></BlogNewsSocial>
            </Col>
          </Row>
        <Container>
          <Row>
            <Col xl={8} className="pe-xl-4 pe-0">
              <BlogNewsContent></BlogNewsContent>
            </Col>
            <Col xl={4} className="ps-xl-4 ps-0 pe-0">
              <BlogNews></BlogNews>
            </Col>
          </Row>
          <Row>
            <Col className="p-0">
              <BlogVideo></BlogVideo>
            </Col>
          </Row>
        </Container>
        <Row>
          <BlogTweets></BlogTweets>
        </Row>
      </section>
    </>
  )
}
