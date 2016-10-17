import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, NavItem, Nav } from 'react-bootstrap';
import './App.css'
import { browserHistory, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Sky Harbor Apps</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem onClick={()=> { browserHistory.push('blog') }}>Blog</NavItem>
                  <NavItem onClick={()=> { browserHistory.push('portfolio')}}>Portfolio</NavItem>
                  <NavItem onClick={()=> { browserHistory.push('contact') }}>Contact</NavItem>
                </Nav>
              </Navbar.Collapse>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <br/>
            { this.props.children }
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
