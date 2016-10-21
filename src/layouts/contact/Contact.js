/**
 * Created by danielhollcraft on 10/17/16.
 */
import React, {Component} from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock} from 'react-bootstrap';
import api from '../../api/api'
import {testEmail} from './helpers'


export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      submitPressed: false,
      emailAttempted:false,
      email: '',
      emailInvalidMessage: 'Required'
    };
  }

  submit() {
    this.setState({submitPressed: true});

    if (this.state.email.length > 0 && testEmail(this.state.email)) {
      api.contact();
    } else {
      this.setState({emailInvalidMessage: "Email Invalid"});
    }
  }

  handleEmailChange(e) {

    const email = e.target.value;

    this.setState({email});

    if(! this.state.emailAttempted) {
      this.setState({emailAttempted: true});
    }

    if (testEmail(email)) {
      this.setState({emailInvalidMessage: ""});
    } else {
      if(email.length === 0) {
        this.setState({emailInvalidMessage: "Required"});
      } else {
        this.setState({emailInvalidMessage: "Email Invalid"});
      }
    }
  }

  getEmailValidationState() {
    if (this.state.submitPressed || this.state.emailAttempted) {
      if (this.state.email.length === 0 || ! testEmail(this.state.email)) {
        return 'error'
      }
    }
  }

  render() {

    const { email, emailInvalidMessage } = this.state;

    // TODO: Refactor each input into it's own separate component
    return (
      <Form horizontal>
        <FormGroup
          controlId="formHorizontalEmail"
          validationState={this.getEmailValidationState()}
        >
          <Col componentClass={ControlLabel} sm={2}>
            Your Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              value={email}
              placeholder="Email"
              onChange={this.handleEmailChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>{emailInvalidMessage}</HelpBlock>
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
            <Button type="button" onClick={this.submit.bind(this)}>
              Send
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

