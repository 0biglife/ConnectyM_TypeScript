import {SHOW_MODAL, CLOSE_MODAL} from '../types';

export default function showModalReducer(state = false, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
