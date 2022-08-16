const USERS = "USERS";

export const getUsers = (data) => {
  return {
    type: USERS,
    payload: data,
  };
};

export const filterArr = (value) => {
  return {
    type: "FILTER",
    payload: value,
  };
};