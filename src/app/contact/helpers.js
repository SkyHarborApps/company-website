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
      Object.assign(newState, {emailInvalidMessage: "Email Invalid"});
    }
  }

  return newState
}

function formInputValid(email, message) {
  return email.length > 0 && testEmail(email) && message.length > 0
}

export default {submit, testEmail}