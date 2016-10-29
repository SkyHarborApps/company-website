/**
 * Created by danielhollcraft on 10/17/16.
 */
import React, {Component} from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock} from 'react-bootstrap';
import helpers from './actions'

export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      submitPressed: false,
      emailAttempted:false,
      messageAttempted:false,
      email: '',
      message: '',
      emailHelpText: 'Required',
      messageHelpText: 'Required'
    };
  }

  submit() {
    this.setState(helpers.submit(this.state.email, this.state.message))
  }

  handleEmailChange(e) {
    this.setState(helpers.handleEmailChange(e.target.value, this.state.emailAttempted))
  }

  handleMessageChange(e) {
    this.setState(helpers.handleMessageChange(e.target.value, this.state.emailAttempted))
  }

  getEmailValidationState() {
    const { submitPressed, email, emailAttempted } = this.state;

    // TODO: create better syntax for adding multiple conditions
    return helpers.getValidationState(
      submitPressed, emailAttempted, email.length, helpers.isValidEmail(this.state.email)
    );
  }

  getMessageValidationState() {
    const { submitPressed, message, messageAttempted } = this.state;
    return helpers.getValidationState(submitPressed, messageAttempted, message.length);
  }

  render() {

    const { email, emailHelpText, message, messageHelpText } = this.state;
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
              <HelpBlock>{emailHelpText}</HelpBlock>
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
              <HelpBlock>{messageHelpText}</HelpBlock>
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

