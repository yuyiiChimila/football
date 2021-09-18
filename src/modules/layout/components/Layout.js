import React from 'react'
import { Row } from 'react-bootstrap';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Row>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Row>
    </>
  )
}
