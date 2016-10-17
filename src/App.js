import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, NavItem, Nav } from 'react-bootstrap';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Sky Harbor Apps</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="/blog">Blog</NavItem>
                  <NavItem eventKey={2} href="/portfolio">Portfolio</NavItem>
                  <NavItem eventKey={2} href="/contact">Contact</NavItem>
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
