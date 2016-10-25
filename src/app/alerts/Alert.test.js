/**
 * Created by danielhollcraft on 10/21/16.
 */

import React from 'react';
import SkyAlert from './Alert';
import { shallow } from 'enzyme';
import { Alert, AlertContainer } from "react-bs-notifier";

describe('Alert', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SkyAlert
        type='danger'
        headline='Oh No!'
        text="There is a problem!"
      />)
  });

  describe('AlertContainer', () => {
    it('should have an AlertContainer as top level element', () => {
      expect(wrapper.type()).toEqual(AlertContainer)
    });

    it('should have AlertContainer have a top right position', () => {
      expect(wrapper.props().position).toEqual("top-right")

    });
  });

  describe('Alert', () => {
    it('should have an Alert component in correct position', () => {
      expect(wrapper.childAt(0).type()).toEqual(Alert)
    });

    it('should have the correct type prop val', () => {
      expect(wrapper.childAt(0).props().type).toEqual('danger')
    });

    it('should have the correct headline prop val', () => {
      expect(wrapper.childAt(0).props().headline).toEqual('Oh No!')

    });

    it('should have the correct showIcon val', () => {
      expect(wrapper.childAt(0).props().showIcon).toEqual(true)

    });

    it('should have correct text', () => {
      expect(wrapper.childAt(0).childAt(0).text()).toEqual('There is a problem!')
    });

    it('should dismiss the alert when alert is pressed', () => {
      wrapper.childAt(0).simulate('dismiss')
      expect(wrapper.type()).toEqual('div')
    });
  });
});