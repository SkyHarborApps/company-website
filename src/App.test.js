import React from 'react';
import { shallow } from 'enzyme';
import { LinkContainer } from 'react-router-bootstrap'
import { App } from './App';
import { Grid, Navbar, Jumbotron, NavItem, Nav } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router'


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App children={'I am a child!'} location={{location: {pathname: 'blog'}}} />);
  });

  describe('Layout', () => {
    describe('Navbar', () => {
      it('should have a Navbar as a top component', () => {
        expect(wrapper.childAt(0).type()).toEqual(Navbar)
      });
      it('should have Navbar parent component have inverse=true', () => {
        expect(wrapper.find(Navbar).props().inverse).toEqual(true)

      });
      
      it('should have Navbar parent component have fixedTop=true', () => {
        expect(wrapper.find(Navbar).props().fixedTop).toEqual(true)

      });
      
      it('should have a Grid after Navbar parent component', () => {
        expect(wrapper.childAt(0).childAt(0).type()).toEqual(Grid)

      });
      
      it('should have a Navbar.Header after Grid', () => {
        expect(wrapper.childAt(0).childAt(0).childAt(0).type()).toEqual(Navbar.Header)
      });

      it('should have a Navbar.Brand as nexxt component', () => {
        expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).type()).toEqual(Navbar.Brand)
      });

      it('should have Navbar.Brand contain a Link to index', () => {
        expect(wrapper.find(Navbar.Brand).childAt(0).type()).toEqual(Link)

      });

      it('should have correct title in Link', () => {
        expect(wrapper.find(Navbar.Brand).childAt(0).childAt(0).text()).toEqual('Sky Harbor Apps')
      });

      it('should have a Navbar.Collapse component next', () => {
        expect(wrapper.childAt(0).childAt(0).childAt(1).type()).toEqual(Navbar.Collapse)
      });

      it('should remove hover, focus, and active events from Navbar.Brand', () => {
        expect(wrapper.find(Navbar.Brand).props().className).toEqual('brand')
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
    describe('content container', () => {
      it('should have top level container be a Jumbotron component', () => {
        expect(wrapper.childAt(1).type()).toEqual(Jumbotron)

      });
      it('should have the next component be a Grid component', () => {
        expect(wrapper.childAt(1).childAt(0).type()).toEqual(Grid)

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


