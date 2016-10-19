/**
 * Created by danielhollcraft on 10/17/16.
 */
import React from 'react';
import { Col, Thumbnail, Grid, Row} from 'react-bootstrap';

export const Portfolio = () => {
  return (
    <Row>
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="http://placehold.it/350x350" />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="http://placehold.it/350x350" />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="http://placehold.it/350x350" />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="http://placehold.it/350x350" />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="http://placehold.it/350x350" />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="http://placehold.it/350x350" />
          </Col>
        </Row>
      </Grid>
    </Row>
  )
};


