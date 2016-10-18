import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, NavItem, Nav } from 'react-bootstrap';
import './App.scss'
import { Link } from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'

export class App extends Component {

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
              <Navbar.Header>
                <Navbar.Brand className="brand">
                  <Link to="/">Sky Harbor Apps</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to='/blog'>
                    <NavItem>Blog</NavItem>
                  </LinkContainer>
                  <LinkContainer to='/portfolio'>
                    <NavItem>Portfolio</NavItem>
                  </LinkContainer>
                  <LinkContainer to='/contact'>
                    <NavItem>Contact</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid className="content">
            { this.props.children }
          </Grid>
        </Jumbotron>
        <footer>© Copyright {new Date().getFullYear()}, Sky Harbor Apps LLC</footer>
      </div>
    );
  }
}
