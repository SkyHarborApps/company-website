import React from 'react';
import { shallow } from 'enzyme';
import { LinkContainer } from 'react-router-bootstrap'
import { App } from './App';
import { Grid, Navbar, Jumbotron, NavItem, Nav, Col } from 'react-bootstrap';
import NavigationBar from './navigationBar/NavigationBar'


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App children={'I am a child!'} location={{location: {pathname: 'blog'}}} />);
  });

  describe('Layout', () => {

    describe('Navbar', () => {
      it('should have a NavigatioBar as a top component', () => {
        expect(wrapper.childAt(0).type()).toEqual(NavigationBar)
      });
    });

    describe('content container', () => {
      it('should have the next component be a Grid component', () => {
        expect(wrapper.childAt(1).type()).toEqual(Grid)
      });

      it('should have Grid have correct class', () => {
        expect(wrapper.childAt(1).props().className).toEqual('content')
      });

      it('should have first child be Col', () => {
        expect(wrapper.childAt(1).childAt(0).type()).toEqual(Col)
      });

      it('should have Col have correct lg prop val', () => {
        expect(wrapper.childAt(1).childAt(0).props().lg).toEqual(10)
      });

      it('should have props.children inside Grid', () => {
        expect(wrapper.childAt(1).childAt(0).childAt(0).text()).toEqual("I am a child!")
      });
    });
    describe('footer', () => {
      it('should have a footer with correct text', () => {
        expect(wrapper.childAt(2).html())
          .toEqual(`<footer>© Copyright ${new Date().getFullYear()}, Sky Harbor Apps LLC</footer>`)
      });
    });
  });
});


