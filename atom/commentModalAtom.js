import { atom } from "recoil";

export const commentModalState = atom({
    key: 'commentModalState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });