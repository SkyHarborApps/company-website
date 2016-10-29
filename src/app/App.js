import React from 'react';
import { Grid, Col} from 'react-bootstrap';
import './App.scss'
import NavigationBar from './navigationBar/NavigationBar'
import Notifications from './notifications/Notifications'

export const App = (props) => {
  return (
    <div>
      <NavigationBar/>
      <Notifications/>
      <Grid className="content">
        <Col lg={10}>
          { props.children }
        </Col>
      </Grid>
      <footer>© Copyright {new Date().getFullYear()}, Sky Harbor Apps LLC</footer>
    </div>
  );
}
