let initState = {
    age: 18,
  };
  
  export const reducer = (state = initState, action) => {
    switch (action.type) {
      case "INCREASE_COUNT":
        return { ...state, age: state.age + 1 };
      case "DECREASE_COUNT":
        return { ...state, age: state.age - 1 };
      default:
        return { ...state };
    }
  };