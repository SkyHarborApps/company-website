/**
 * Created by danielhollcraft on 10/21/16.
 */
import api from './api'

// regex tests: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
function testEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function submit(email, message) {

  const newState = {};

  Object.assign(newState, {submitPressed: true});

  if (formInputValid(email, message)) {
    api.contact(email, message);
  } else {
    if(email.length > 0) {
      newState.emailInvalidMessage = "Email Invalid";
    }
  }

  return newState
}

function handleEmailChange(email, emailAttempted) {

  const newState = { email };

  if(! emailAttempted) {
    newState.emailAttempted = true
  }

  if (testEmail(email)) {
    newState.emailInvalidMessage = ""
  } else {
    if(email.length === 0) {
      newState.emailInvalidMessage = "Required"
    } else {
      newState.emailInvalidMessage = "Email Invalid";
    }
  }

  return newState
}

function handleMessageChange(message, messageAttempted) {
  return messageAttempted ? {message} : {message, messageAttempted: true}
}

function formInputValid(email, message) {
  return email.length > 0 && testEmail(email) && message.length > 0
}

/**
 *
 * @param submitPressed
 * @param attempted
 * @param textLength
 * @param otherTest A logical string that results in true or false.
 * @returns error, success, or undefined
 */
function getValidationState(submitPressed, attempted, textLength, otherTest = true) {
  if (submitPressed || attempted) {
    if ( textLength === 0 || ! otherTest) {
      return 'error'
    } else {
      return 'success'
    }
  }
}

export default {
  submit,
  testEmail,
  handleEmailChange,
  handleMessageChange,
  getValidationState
}