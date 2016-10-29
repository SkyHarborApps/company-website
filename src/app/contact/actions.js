/**
 * Created by danielhollcraft on 10/21/16.
 */
import api from './api'

// regex tests: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/**
 * Handle submitting of contact form.
 *
 * @param email
 * @param message
 * @returns {{}}
 */
function submit(email, message) {

  const newState = {};

  Object.assign(newState, {submitPressed: true});

  if (formInputValid(email, message)) {
    api.contact(email, message);
  } else {
    if(email.length > 0) {
      newState.emailHelpText = "Email Invalid";
    }
  }

  return newState
}

/**
 * Email input validation.
 *
 * @param email
 * @param attempted
 * @returns {{email: *}}
 */
function handleEmailChange(email, attempted) {

  const newState = { email };

  if(! attempted)
    newState.emailAttempted = true;

  newState.emailHelpText = isValidEmail(email) ? '' : isFieldEmpty(email, 'Email Invalid')

  return newState
}

/**
 * Message input validation.
 *
 * @param message
 * @param attempted
 * @returns {{message: *}}
 */
function handleMessageChange(message, attempted) {
  const newState = { message };

  if(! attempted)
    newState.messageAttempted = true;

  newState.messageHelpText = isFieldEmpty(message)

  return newState
}

/**
 * Check if a field is empty
 *
 * @param fieldContents
 * @param alternateMessage
 * @param errorMessage
 * @returns {string}
 */
function isFieldEmpty(fieldContents, alternateMessage='', errorMessage='Required') {
  return fieldContents.length === 0 ? errorMessage: alternateMessage
}

/**
 * Look at whole form and see if it is valid
 *
 * @param email
 * @param message
 * @returns {boolean}
 */
function formInputValid(email, message) {
  return email.length > 0 && isValidEmail(email) && message.length > 0
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
  isValidEmail,
  handleEmailChange,
  handleMessageChange,
  getValidationState
}