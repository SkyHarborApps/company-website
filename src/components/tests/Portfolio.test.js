/**
 * Created by danielhollcraft on 10/20/16.
 */
import React from 'react';
import { Portfolio } from '../Portfolio';
import { shallow } from 'enzyme';
import { Col, Thumbnail, Row} from 'react-bootstrap';


describe('Portfolio', () => {

  let wrapper,
    Cols,
    Thumbnails;

  beforeEach(() => {
    wrapper = shallow(<Portfolio/>)
    Cols = wrapper.find(Col);
    Thumbnails = wrapper.find(Thumbnail);
  });

  describe('Layout', () => {
    it('should have a Row', () => {
      expect(wrapper.type()).toEqual(Row)
    });


    describe('Columns', () => {
      it('should have correct number of Cols', () => {
        expect(wrapper.find(Col).length).toEqual(6)
      });

      it('should have the correct xs prop val on each Col', () => {

        Cols.forEach(col => {
          expect(col.props().xs).toEqual(6)
        })
      });

      it('should have the correct md prop val on each Col', () => {

        Cols.forEach(col => {
          expect(col.props().md).toEqual(3)
        })
      });

      it('should have correct key prop val on each Col', () => {
        let key = 0;

        Cols.forEach(col => {
          expect(col.key()).toEqual(`${key}`)
          ++key
        })
      });
    });

    describe('Thumbnails', () => {
      it('should have correct number of Thumbnails', () => {
        expect(wrapper.find(Thumbnail).length).toEqual(6)
      });

      it('should have each Thumbnail have correct alt prop value', () => {
        Thumbnails.forEach(t => {
          expect(t.props().alt).toEqual("350x350")
        })
      });

      it('should have each Thumbnail have correct src', () => {
        Thumbnails.forEach(t => {
          expect(t.props().src).toEqual("http://placehold.it/350x350")
        })
      });

      it('should have h4 as first inner element for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(0).type()).toEqual("h4")
        })
      });

      it('should h4 with expected text for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(0).text()).toEqual("Project Title (2015-2016)")
        })
      });

      it('should have div as next element for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(1).type()).toEqual("div")
        })
      });

      it('should have div with expected text for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(1).text()).toEqual("This is a description of the project " +
            "telling you the problem and how it was fixed.")
        })
      });

      it('should have a link as 3rd element for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(2).type()).toEqual("a")
        })
      });

      it('should have first link have expected text for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(2).text()).toEqual("Link to demo")
        })
      });

      it('should have a link as 4th element for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(3).type()).toEqual("a")
        })
      });

      it('should have second link have expected text for each Thumbnail', () => {
        Thumbnails.forEach(t => {
          expect(t.childAt(3).text()).toEqual("Link to code")
        })
      });
    });
  });
});