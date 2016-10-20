/**
 * Created by danielhollcraft on 10/17/16.
 */
import React from 'react';
import { Col, Thumbnail, Row} from 'react-bootstrap';

export const Portfolio = () => {

  const portfolioThumbnailURLS = [
    "http://placehold.it/350x350",
    "http://placehold.it/350x350",
    "http://placehold.it/350x350",
    "http://placehold.it/350x350",
    "http://placehold.it/350x350",
    "http://placehold.it/350x350"
  ];

  return (
    <Row>
      {
        portfolioThumbnailURLS.map((url, i) => {
          return (
            <Col key={i} xs={6} md={3}>
              <Thumbnail alt="350x350" src={url}>
                <h4>Project Title (2015-2016)</h4>
                <div>This is a description of the project telling you the problem and how it was fixed.</div>
                <a href="#">Link to demo</a>
                <a href="#">Link to code</a>
              </Thumbnail>
            </Col>
          )
        })
      }
    </Row>
  )
};


