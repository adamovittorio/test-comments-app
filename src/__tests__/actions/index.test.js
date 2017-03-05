import { SAVE_COMMENT } from '../../actions/types';
import { saveComment } from '../../actions';

describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).toEqual('new comment');
    });
  });
});
