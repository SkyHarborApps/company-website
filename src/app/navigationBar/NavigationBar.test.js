import { Link } from 'react-router'
import NavigationBar from './NavigationBar'
import React from 'react';
import { shallow } from 'enzyme';
import { LinkContainer } from 'react-router-bootstrap'
import { Grid, Navbar, NavItem, Nav, Col } from 'react-bootstrap';


describe('Navbar', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationBar />);
  });

  describe('Layout', () => {
    it('should have Navbar parent component have inverse=true', () => {
      expect(wrapper.props().inverse).toEqual(true)
    });

    it('should have Navbar parent component have fixedTop=true', () => {
      expect(wrapper.props().fixedTop).toEqual(true)

    });

    it('should have a Grid after Navbar parent component', () => {
      expect(wrapper.childAt(0).type()).toEqual(Grid)
    });

    it('should have Grid have class navContainer to handle padding on collapsible navbar widget', () => {
      expect(wrapper.childAt(0).childAt(0).props().className).toEqual('navContainer')
    });

    it('should have a Col as first child of Grid', () => {
      expect(wrapper.childAt(0).childAt(0).type()).toEqual(Col)
    });

    it('should have Col have correct lg prop val', () => {
      expect(wrapper.childAt(0).childAt(0).props().lg).toEqual(5)
    });

    it('should have Col have correct md prop val', () => {
      expect(wrapper.childAt(0).childAt(0).props().md).toEqual(5)
    });

    it('should have Col have correct sm prop val', () => {
      expect(wrapper.childAt(0).childAt(0).props().sm).toEqual(5)
    });

    it('should have a Navbar.Header as first child of Col', () => {
      expect(wrapper.childAt(0).childAt(0).childAt(0).type()).toEqual(Navbar.Header)
    });

    it('should have a Navbar.Brand as next component', () => {
      expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).type()).toEqual(Navbar.Brand)
    });

    it('should have Navbar.Brand contain a Link to index', () => {
      expect(wrapper.find(Navbar.Brand).childAt(0).type()).toEqual(Link)

    });

    it('should have correct title in Link', () => {
      expect(wrapper.find(Navbar.Brand).childAt(0).childAt(0).text()).toEqual('Sky Harbor Apps')
    });

    it('should have a Navbar.Toggle after Navbar.Brand', () => {
      expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(1).type()).toEqual(Navbar.Toggle)

    });

    it('should have Col as second child of Grid', () => {
      expect(wrapper.childAt(0).childAt(1).type()).toEqual(Col)

    });

    it('should have second Col have correct lg prop val', () => {
      expect(wrapper.childAt(0).childAt(1).props().lg).toEqual(5)
    });

    it('should have second Col have correct md prop val', () => {
      expect(wrapper.childAt(0).childAt(1).props().md).toEqual(7)
    });

    it('should have second Col have correct sm prop val', () => {
      expect(wrapper.childAt(0).childAt(1).props().sm).toEqual(7)
    });

    it('should have a Navbar.Collapse component next', () => {
      expect(wrapper.childAt(0).childAt(1).childAt(0).type()).toEqual(Navbar.Collapse)
    });

    it('should remove hover, focus, and active events from Navbar.Brand', () => {
      expect(wrapper.find(Navbar.Brand).props().className).toEqual('brand')
    });
  });

  describe('Navbar.Collapse', () => {

    it('should contain a Nav as top level component', () => {
      expect(wrapper.find(Navbar.Collapse).childAt(0).type()).toEqual(Nav)
    });

    it('should have top level Nav have a pullRight = true', () => {
      expect(wrapper.find(Nav).props().pullRight).toEqual(true)
    });

    describe('NavItems', () => {

      it('should have 3 NavItems', () => {
        expect(wrapper.find(NavItem).length).toEqual(3)
      });

      it('should have 3 LinkContainers', () => {
        expect(wrapper.find(LinkContainer).length).toEqual(3)
      });

      it('should have a first Nav item with correct text', () => {
        expect(wrapper.find(Nav).childAt(0).childAt(0).childAt(0).text()).toEqual('Blog')

      });

      it('should have a second Nav item with correct text', () => {
        expect(wrapper.find(Nav).childAt(1).childAt(0).childAt(0).text()).toEqual('Portfolio')

      });

      it('should have a third Nav item with correct text', () => {
        expect(wrapper.find(Nav).childAt(2).childAt(0).childAt(0).text()).toEqual('Contact')
      });

      it('should have correct to prop for first LinkContainer', () => {
        expect(wrapper.find(Nav).childAt(0).props().to).toEqual('/blog')
      });

      it('should have correct to prop for second LinkContainer', () => {
        expect(wrapper.find(Nav).childAt(1).props().to).toEqual('/portfolio')

      });

      it('should have correct to prop for third LinkContainer', () => {
        expect(wrapper.find(Nav).childAt(2).props().to).toEqual('/contact')
      });
    });
  });
});