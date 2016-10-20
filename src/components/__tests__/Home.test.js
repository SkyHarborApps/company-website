/**
 * Created by danielhollcraft on 10/18/16.
 */
import React from 'react';
import { Home } from '../Home';
import { shallow } from 'enzyme';
import {Image} from 'react-bootstrap'

describe('Home', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>)
  });
  describe('Layout', () => {
    it('should have Image as first element', () => {
      expect(wrapper.childAt(0).type()).toEqual(Image)
    });

    it('should have image with correct class', () => {
      expect(wrapper.childAt(0).props().className).toEqual('profile')
    });

    it('should have source image have correct path', () => {
      expect(wrapper.childAt(0).props().src).toEqual("test-file-stub")
    });

    it('should have source image have correct border paths', () => {
      expect(wrapper.childAt(0).props().circle).toEqual(true)
    });

    it('should have p tag as second element', () => {
      expect(wrapper.childAt(1).type()).toEqual('p')
    });
  });
});