/**
 * Created by danielhollcraft on 10/21/16.
 */
import React, { Component, PropTypes } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";

const propTypes = {
  /**
   * The type of alert [info, success, warning, danger]
   */
  type: PropTypes.string,
  /**
   * Heading for alert
   */
  headline: PropTypes.string,
  /**
   * left icon, must include font-awesome
   */
  showIcon: PropTypes.bool,
  /**
   * dismiss function handler
   */
  onDismiss: PropTypes.func,
  /**
   * Alert text
   */
  text: PropTypes.string
};


class SkyAlert extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAlert: true
    }
  }

  handleDismiss() {
    this.setState({showAlert: false})
  }

  render() {

    const {type, headline, showIcon, text} = this.props

    if(this.state.showAlert) {
      return (
        <AlertContainer position="top-right">
          <Alert
            type={type}
            headline={headline}
            showIcon={showIcon}
            onDismiss={this.handleDismiss.bind(this)}
          >
            {text}
          </Alert>
        </AlertContainer>
      )
    } else {
      return <div></div>
    }
  }
}

SkyAlert.propTypes = propTypes;

export default {Alert: SkyAlert}

