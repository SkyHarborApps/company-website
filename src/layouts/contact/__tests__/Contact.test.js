/**
 * Created by danielhollcraft on 10/20/16.
 */

import React from 'react';
import { Contact } from '../Contact';
import { shallow, mount } from 'enzyme';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock} from 'react-bootstrap';
import api from '../../../api/api'


describe('Form', () => {

  let wrapper,
    firstFormGroup,
    secondFormGroup,
    thirdFormGroup;

  beforeEach(() => {
    api.contact = jest.fn();
    wrapper = shallow(<Contact/>);
    // Be sure to reassign form group references when updating component state.
    // Otherwise you'll not see changes propagate.
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
        expect(firstFormGroup.find(Col).at(1).childAt(0).props().type).toEqual('text');
      });

      it('should have placeholder have correct value', () => {
        expect(firstFormGroup.find(Col).at(1).childAt(0).props().placeholder).toEqual('Email');
      });

    });

    describe('Message Input', () => {

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
      })

      it('should have correct value prop', () => {
        expect(secondFormGroup.find(Col).at(1).childAt(0).props().value).toEqual('');

      });
    });

    describe('Submit Button', () => {

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
        expect(thirdFormGroup.find(Col).at(0).childAt(0).props().type).toEqual('button')
      });

      it('should have Button have correct text', () => {
        expect(thirdFormGroup.find(Col).at(0).childAt(0).childAt(0).text()).toEqual('Send')
      });
    });
  });
  describe('Form Validation', () => {
    describe('Email Input', () => {

      describe('Layout', () => {
        it('should have a Form.Feedback component after Form  Control', () => {
          expect(firstFormGroup.find(Col).at(1).childAt(1).type()).toEqual(FormControl.Feedback)
        });

        it('should have a HelpBlock after Form.Feedback component', () => {
          expect(firstFormGroup.find(Col).at(1).childAt(2).type()).toEqual(HelpBlock)
        });

        it('should not have any issues with validation state initially', () => {
          expect(firstFormGroup.props().validationState).toEqual(undefined);
        });

        it('should show no text in HelpBlock initially', () => {
          expect(firstFormGroup.find(Col).at(1).childAt(2).childAt(0).text()).toEqual('Required')
        });
      });

      describe('On Submit', () => {
        it('should not be able to submit form if empty email field', () => {
          thirdFormGroup.find(Button).simulate('click');
          expect(api.contact).not.toHaveBeenCalled();
        });

        it('should set validation state correctly when email is empty on submit', () => {
          thirdFormGroup.find(Button).simulate('click');
          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.props().validationState).toEqual('error');
        });

        it('should set validation state correctly when email is invalid on submit', () => {
          wrapper.setState({email: 'hello'})
          thirdFormGroup.find(Button).simulate('click');
          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.props().validationState).toEqual('error');
        });

        it('should not be able to submit form if a non email string', () => {
          wrapper.setState({email: 'hello'})
          thirdFormGroup.find(Button).simulate('click');
          expect(api.contact).not.toHaveBeenCalled();
        });

        it('should show correct text in HelpBlock if email is invalid on submit', () => {
          thirdFormGroup.find(Button).simulate('click');
          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.find(Col).at(1).childAt(2).childAt(0).text()).toEqual('Email Invalid')

        });
      });

      describe('On Input Value Change', () => {

        it('should show correct text in HelpBlock if email is invalid on value change', () => {
          wrapper.find(FormControl).at(0).simulate('change', {target: {
            value: 'hello'
          }});
          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.find(Col).at(1).childAt(2).childAt(0).text()).toEqual('Email Invalid')
        });

        it('should show correct text in HelpBlock if email was invalid and now is ok', () => {
          wrapper.setState({emailInvalidMessage: "Email Invalid"})
          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.find(Col).at(1).childAt(2).childAt(0).text()).toEqual('Email Invalid')

          wrapper.find(FormControl).at(0).simulate('change', {target: {
            value: 'hello@email.com'
          }});

          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.find(Col).at(1).childAt(2).childAt(0).text()).toEqual('')
        });

        it('should set validation state correctly when email is empty on input value change', () => {
          wrapper.find(FormControl).at(0).simulate('change', {target: {
            value: 'hello'
          }});
          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.props().validationState).toEqual('error');
        });

        it('should reset HelpBlock message to correct state when input attempted but then erased', () => {
          wrapper.find(FormControl).at(0).simulate('change', {target: {
            value: 'hello'
          }});

          wrapper.find(FormControl).at(0).simulate('change', {target: {
            value: ''
          }});
          firstFormGroup = wrapper.find(FormGroup).at(0);
          expect(firstFormGroup.find(Col).at(1).childAt(2).childAt(0).text()).toEqual('Required')
        });

        it('should display success state when input is valid', () => {
          wrapper.find(FormControl).at(0).simulate('change', {target: {
            value: 'hello@email.com'
          }});
          firstFormGroup = wrapper.find(FormGroup).at(0);

          expect(firstFormGroup.props().validationState).toEqual('success');
        });
      });
    });

    describe('Message Input', () => {

      describe('Layout', () => {
        it('should have a Form.Feedback component after Form  Control', () => {
          expect(secondFormGroup.find(Col).at(1).childAt(1).type()).toEqual(FormControl.Feedback)
        });

        it('should have a HelpBlock after Form.Feedback component', () => {
          expect(secondFormGroup.find(Col).at(1).childAt(2).type()).toEqual(HelpBlock)
        });

        it('should not have any issues with validation state initially', () => {
          expect(secondFormGroup.props().validationState).toEqual(undefined);
        });

        it('should show no text in HelpBlock initially', () => {
          expect(secondFormGroup.find(Col).at(1).childAt(2).childAt(0).text()).toEqual('Required')
        });
      });

      describe('On Submit', () => {
        it('should not be able to submit form if message field is empty', () => {
          wrapper.setState({email: 'hello@email.com'})
          thirdFormGroup.find(Button).simulate('click');
          expect(api.contact).not.toHaveBeenCalled();

        });

        it('should set validation state correctly when text is empty on submit', () => {
          thirdFormGroup.find(Button).simulate('click');
          secondFormGroup = wrapper.find(FormGroup).at(1);
          expect(secondFormGroup.props().validationState).toEqual('error');
        });
      });

      describe('On Input Value Change', () => {
        it('should set validation state correctly when text is empty on input value change', () => {
          wrapper.find(FormControl).at(1).simulate('change', {target: {
            value: ''
          }});
          secondFormGroup = wrapper.find(FormGroup).at(1);
          expect(secondFormGroup.props().validationState).toEqual('error');
        });

        it('should display success state when input is valid', () => {
          wrapper.find(FormControl).at(1).simulate('change', {target: {
            value: 'Hello! How are you?'
          }});

          secondFormGroup = wrapper.find(FormGroup).at(1);

          expect(secondFormGroup.props().validationState).toEqual('success');
        });
      });

    });

  });
  describe('Submitting Form', () => {

    it('should send request to server', () => {

    });

    it('should send correct payload to server', () => {

    });
  });
});