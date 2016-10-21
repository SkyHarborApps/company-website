/**
 * Created by danielhollcraft on 10/17/16.
 */
import React, {Component} from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock} from 'react-bootstrap';
import helpers from './helpers'
import Alert from "../alerts/Alert"


export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      submitPressed: false,
      emailAttempted:false,
      messageAttempted:false,
      email: '',
      message: '',
      emailInvalidMessage: 'Required'
    };
  }

  submit() {
    this.setState(helpers.submit(this.state.email, this.state.message))
  }

  handleEmailChange(e) {

    const email = e.target.value;

    this.setState({email});

    if(! this.state.emailAttempted) {
      this.setState({emailAttempted: true});
    }

    if (helpers.testEmail(email)) {
      this.setState({emailInvalidMessage: ""});
    } else {
      if(email.length === 0) {
        this.setState({emailInvalidMessage: "Required"});
      } else {
        this.setState({emailInvalidMessage: "Email Invalid"});
      }
    }
  }

  handleMessageChange(e) {
    const message = e.target.value;

    this.setState({message});

    if(! this.state.messageAttempted) {
      this.setState({messageAttempted: true});
    }
  }

  getEmailValidationState() {
    if (this.state.submitPressed || this.state.emailAttempted) {
      if (this.state.email.length === 0 || ! helpers.testEmail(this.state.email)) {
        return 'error'
      } else {
        return 'success'
      }
    }
  }

  getMessageValidationState() {
    if (this.state.submitPressed || this.state.messageAttempted) {
      if (this.state.message.length === 0) {
        return 'error'
      } else {
        return 'success'
      }
    }

    return undefined
  }

  render() {

    const { email, emailInvalidMessage, message } = this.state;

    // TODO: Refactor each input into it's own separate component
    return (
      <div>
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

        <FormGroup
          controlId="formControlsTextarea"
          validationState={this.getMessageValidationState()}
        >
          <Col componentClass={ControlLabel} sm={2}>
            Message
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="textarea"
              placeholder="Your message..."
              value={message}
              onChange={this.handleMessageChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>Required</HelpBlock>
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
      </div>
    )
  }
}

