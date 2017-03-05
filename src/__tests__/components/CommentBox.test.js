import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from '../../components/CommentBox';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentBox saveComment={() => ({})} />);
  });

  it('has the correct class', () => {
    expect(component).toHaveClassName('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).toBePresent();
  });

  it('has a button', () => {
    expect(component.find('button')).toBePresent();
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', { target: { value: 'super awesome!' } });
    });

    it('show text in the textarea ', () => {
      const value = component.find('textarea').props().value;
      expect(value).toEqual('super awesome!');
      expect(component.state()).toEqual({ comment: 'super awesome!' });
    });

    it('when submiteted, clears the input', () => {
      component.find('button').simulate('click');
      expect(component.state()).toEqual({ comment: '' });
    });
  });
});
