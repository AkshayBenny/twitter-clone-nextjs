import { atom } from 'recoil';

export const commentModalState = atom({
  key: 'commentModalState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const postIdState = atom({
  key: 'postIdState', // unique ID (with respect to other atoms/selectors)
  default: 'random', // default value (aka initial value)
});

//the default value for postIdState is set to 'random' so the initial value is not empty which causes an error when fetching data from firebase in CommentModal.js

//the default value can be any value for postIdState
