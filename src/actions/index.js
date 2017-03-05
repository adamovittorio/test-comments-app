import { SAVE_COMMENT } from './types';

// eslint-disable-next-line
export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});
