import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container } from 'react-bootstrap';
import Layout from './modules/layout/components/Layout'

function App() {
  return (
    <>
      <Container fluid>
        <Layout></Layout>
      </Container>
    </>
  );
}

export default App;
