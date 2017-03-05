import commentReducer from '../../reducers/comments';
import { SAVE_COMMENT } from '../../actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknow type', () => {
    const action = {
      type: 'UNKNOW',
    };
    const stateBefore = [];
    expect(commentReducer(stateBefore, action)).toBe(stateBefore);
  });

  it('SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'comment',
    };
    const stateBefore = [];
    const stateAfter = ['comment'];
    expect(commentReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
