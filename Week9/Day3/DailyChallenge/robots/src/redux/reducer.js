import { SEARCH, USERS } from "./actions";

const initState = {
  users: [],
  text: "",
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, text: action.payload };
    case USERS:
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
};