import React from 'react';
import { shallow } from 'enzyme';
import CommentList from '../../components/CommentList';

describe('CommentList', () => {
  let wrapper;
  beforeEach(() => {
    const comments = ['comment 1', 'comment 2'];
    wrapper = shallow(<CommentList comments={comments} />);
  });

  it('shows an <li> for each comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('shows each comment that is provided', () => {
    expect(wrapper.find('li').at(0)).toHaveText('comment 1');
    expect(wrapper.find('li').at(1)).toHaveText('comment 2');
  });
});
