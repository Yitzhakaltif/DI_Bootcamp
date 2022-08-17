import { trackPromise } from "react-promise-tracker";

export const SEARCH = "SEARCH";
export const USERS = "USERS";

export const handleChange = (value) => {
  return {
    type: SEARCH,
    payload: value,
  };
};

export const getUsers = () => (dispatch) => {
  trackPromise(
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((user) => user.json())
      .then((data) => {
        dispatch({ type: USERS, payload: data });
      })
  );
};