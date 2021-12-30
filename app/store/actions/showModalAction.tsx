import {SHOW_MODAL} from '../types';

export const showModalAction = () => {
  return {
    type: SHOW_MODAL,
    payload: {
      showModal: true,
    },
  };
};
