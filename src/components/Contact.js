/**
 * Created by danielhollcraft on 10/17/16.
 */
import React from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export const Contact = () => {
  return (
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Your Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formControlsTextarea">
        <Col componentClass={ControlLabel} sm={2}>
          Message
        </Col>
        <Col sm={10}>
          <FormControl componentClass="textarea" placeholder="Your message..." />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Send
          </Button>
        </Col>
      </FormGroup>
    </Form>
  )
};

