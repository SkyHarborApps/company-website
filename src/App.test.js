import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  describe('Layout', () => {
    describe('Navbar', () => {
      it('should have a Navbar as a top component', () => {

      });
      it('should have Navbar parent component have inverse=true', () => {

      });
      
      it('should have Navbar parent component have fixedTop=true', () => {

      });
      
      it('should have a Grid after Navbar parent component', () => {

      });
      
      it('should have a Navbar.Header after Grid', () => {

      });

      it('should have a Navbar.Brand as nexxt component', () => {
        
      });

      it('should have Navbar.Brand contain a Link to index', () => {
        
      });

      it('should have correct title in Link', () => {
        
      });

      it('should have a Navbar.Collapse component next', () => {

      });
      
      describe('Navbar.Collapse', () => {
        
        it('should contain a Nav as top level component', () => {

        });

        it('should have top level Nav have a pullRight = true', () => {
          
        });
        
        describe('Nav items', () => {
          it('should have a first Nav item with correct text', () => {

          });
          
          it('should have a second Nav item with correct text', () => {

          });
          
          it('should have a third Nav item with correct text', () => {

          });

          it('should have first Nav item go to correct URL', () => {
            
          });

          it('should have second Nav item go to correct URL', () => {

          });

          it('should have third Nav item go to correct URL', () => {
            
          });
        });
      });
    });
    describe('Main container', () => {
      it('should have top level container be a Grid component', () => {
        
      });
      it('should have props.children inside Grid', () => {

      });
    });
    it('should have a footer with correct text', () => {

    });
  });
});


