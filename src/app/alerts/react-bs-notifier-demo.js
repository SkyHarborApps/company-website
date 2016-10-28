/**
 * Created by danielhollcraft on 10/28/16.
 */
import React from 'react'


class NotifierGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: [],
      timeout: 0,
      newMessage: "This is a test of the Emergency Broadcast System. This is only a test."
    };
  }
  
  generate(type) {
    const newAlert ={
      id: (new Date()).getTime(),
      type: type,
      headline: `Whoa, ${type}!`,
      message: this.state.newMessage
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