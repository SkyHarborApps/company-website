/**
 * Created by danielhollcraft on 10/20/16.
 */

import React from 'react';
import { Contact } from '../Contact';
import { shallow } from 'enzyme';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, } from 'react-bootstrap';


describe('Form', () => {

  let wrapper,
    firstFormGroup,
    secondFormGroup,
    thirdFormGroup;

  beforeEach(() => {
    wrapper = shallow(<Contact/>);
    firstFormGroup = wrapper.find(FormGroup).at(0);
    secondFormGroup = wrapper.find(FormGroup).at(1);
    thirdFormGroup = wrapper.find(FormGroup).at(2);
  });

  describe('Layout', () => {

    it('should have Form as top component', () => {
      expect(wrapper.type()).toEqual(Form);
    });

    it('should have form have horizontal prop = true', () => {
      expect(wrapper.props().horizontal).toEqual(true);

    });

    it('should have 3 form groups', () => {
      expect(wrapper.find(FormGroup).length).toEqual(3);
    });

    describe('Email input', () => {

      it('should have FormGroup have correct controlId', () => {
        expect(firstFormGroup.props().controlId).toEqual('formHorizontalEmail');
      });

      it('should have two Cols', () => {
        expect(firstFormGroup.find(Col).length).toEqual(2);
      });

      it('should have first Col have correct component class', () => {
        expect(firstFormGroup.find(Col).at(0).props().componentClass).toEqual(ControlLabel);
      });

      it('should have first Col have correct sm prop val', () => {
          expect(firstFormGroup.find(Col).at(0).props().sm).toEqual(2);
      });

      it('should have first Col have correct label', () => {
        expect(firstFormGroup.find(Col).at(0).childAt(0).text()).toEqual("Your Email");
      });

      it('should have second Col have correct sm prop val', () => {
        expect(firstFormGroup.find(Col).at(1).props().sm).toEqual(10);
      });

      it('should have FormControl inside second Col', () => {
        expect(firstFormGroup.find(Col).at(1).childAt(0).type()).toEqual(FormControl);
      });

      it('should have FormControl have correct type', () => {
        expect(firstFormGroup.find(Col).at(1).childAt(0).props().type).toEqual('email');
      });

      it('should have placeholder have correct value', () => {
        expect(firstFormGroup.find(Col).at(1).childAt(0).props().placeholder).toEqual('Email');
      });
    });

    describe('Textarea Input', () => {

      it('should have FormGroup have correct controlId', () => {
        expect(secondFormGroup.props().controlId).toEqual('formControlsTextarea');
      });

      it('should have two Cols', () => {
        expect(secondFormGroup.find(Col).length).toEqual(2);
      });

      it('should have first Col have correct component class', () => {
        expect(secondFormGroup.find(Col).at(0).props().componentClass).toEqual(ControlLabel);
      });

      it('should have first Col have correct sm prop val', () => {
        expect(secondFormGroup.find(Col).at(0).props().sm).toEqual(2);
      });

      it('should have first Col have correct label', () => {
        expect(secondFormGroup.find(Col).at(0).childAt(0).text()).toEqual("Message");
      });

      it('should have second Col have correct sm prop val', () => {
        expect(secondFormGroup.find(Col).at(1).props().sm).toEqual(10);
      });

      it('should have FormControl inside second Col', () => {
        expect(secondFormGroup.find(Col).at(1).childAt(0).type()).toEqual(FormControl);
      });

      it('should have FormControl have correct type', () => {
        expect(secondFormGroup.find(Col).at(1).childAt(0).props().componentClass).toEqual('textarea');
      });

      it('should have placeholder have correct value', () => {
        expect(secondFormGroup.find(Col).at(1).childAt(0).props().placeholder).toEqual('Your message...');
      });
    });

    describe('Submit button', () => {

      it('should have 1 Col', () => {
        expect(thirdFormGroup.find(Col).length).toEqual(1)
      });

      it('should have Col have correct smOffset prop val', () => {
        expect(thirdFormGroup.find(Col).at(0).props().smOffset).toEqual(2)
      });

      it('should have Col have correct sm prop val', () => {
        expect(thirdFormGroup.find(Col).at(0).props().sm).toEqual(10)
      });

      it('should have Button', () => {
        expect(thirdFormGroup.find(Col).at(0).childAt(0).type()).toEqual(Button)
      });

      it('should have Button have correct type', () => {
        expect(thirdFormGroup.find(Col).at(0).childAt(0).props().type).toEqual('submit')
      });

      it('should have Button have correct text', () => {
        expect(thirdFormGroup.find(Col).at(0).childAt(0).childAt(0).text()).toEqual('Send')
      });
    });
  });
});