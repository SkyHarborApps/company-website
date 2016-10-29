/**
 * Created by danielhollcraft on 10/28/16.
 */
import React, { Component, PropTypes } from 'react'
import { AlertList } from "react-bs-notifier";

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    // TODO:  instantiate event listener here for generate function

    this.state = {
      alerts: []
    };
  }

  generate(type, headline, message) {
    const newAlert ={
      id: new Date().getTime(),
      type,
      headline,
      message
    };

    this.setState({
      alerts: [...this.state.alerts, newAlert]
    });
  }

  onAlertDismissed(alert) {
    const alerts = this.state.alerts;

    // find the index of the alert that was dismissed
    const idx = alerts.indexOf(alert);

    if (idx >= 0) {
      this.setState({
        // remove the alert from the array
        alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
      });
    }
  }

  render() {

    return (
      <div>
        <AlertList
          position="top-right"
          alerts={this.state.alerts}
          timeout={3}
          dismissTitle="Begone!"
          onDismiss={this.onAlertDismissed.bind(this)}
        />
      </div>
    );
  }
}